# Messaging Module

## Overview
The Messaging module enables real-time and asynchronous communication between users on the healthcare platform. It supports one-to-one messaging between doctors, patients, and staff members.

## Data Model

### Message
```prisma
model Message {
  id         String   @id @default(uuid())
  content    String
  senderId   String
  sender     User     @relation("SentMessages", fields: [senderId], references: [id])
  receiverId String
  receiver   User     @relation("ReceivedMessages", fields: [receiverId], references: [id])
  isRead     Boolean  @default(false)
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt
}
```

## API Endpoints

### Get All Messages

Returns all messages for the currently authenticated user (sent or received).

- **URL**: `/api/messages`
- **Method**: `GET`
- **Auth**: Required (JWT)
- **Headers**: `Authorization: Bearer <token>`
- **Query Parameters**:
  - `page` (optional): Page number (default: 1)
  - `limit` (optional): Items per page (default: 10)
  - `conversationWith` (optional): Filter messages by conversation partner ID

#### Response (200 OK)
```json
{
  "data": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "content": "Hello, how are you feeling today?",
      "senderId": "b4d2d7e4-3e4a-4f8b-8e1d-c7b9f8e9d7b3",
      "receiverId": "a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d",
      "isRead": true,
      "createdAt": "2023-05-10T14:30:00.000Z",
      "updatedAt": "2023-05-10T14:30:00.000Z",
      "sender": {
        "id": "b4d2d7e4-3e4a-4f8b-8e1d-c7b9f8e9d7b3",
        "firstName": "Dr. Jane",
        "lastName": "Smith",
        "email": "jane.smith@example.com",
        "role": "DOCTOR"
      },
      "receiver": {
        "id": "a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d",
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@example.com",
        "role": "PATIENT"
      }
    }
  ],
  "meta": {
    "totalItems": 45,
    "itemCount": 10,
    "itemsPerPage": 10,
    "totalPages": 5,
    "currentPage": 1
  }
}
```

### Get Conversation

Returns all messages between the current user and a specific user.

- **URL**: `/api/messages/conversation/:userId`
- **Method**: `GET`
- **Auth**: Required (JWT)
- **Headers**: `Authorization: Bearer <token>`
- **URL Parameters**:
  - `userId`: ID of the user to get conversation with
- **Query Parameters**:
  - `page` (optional): Page number (default: 1)
  - `limit` (optional): Items per page (default: 20)

#### Response (200 OK)
```json
{
  "data": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "content": "Hello, how are you feeling today?",
      "senderId": "b4d2d7e4-3e4a-4f8b-8e1d-c7b9f8e9d7b3",
      "receiverId": "a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d",
      "isRead": true,
      "createdAt": "2023-05-10T14:30:00.000Z",
      "updatedAt": "2023-05-10T14:30:00.000Z"
    },
    {
      "id": "660f9511-f30c-52e5-b827-557766551111",
      "content": "I'm feeling much better, thank you for checking in.",
      "senderId": "a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d", 
      "receiverId": "b4d2d7e4-3e4a-4f8b-8e1d-c7b9f8e9d7b3",
      "isRead": false,
      "createdAt": "2023-05-10T14:35:00.000Z",
      "updatedAt": "2023-05-10T14:35:00.000Z"
    }
  ],
  "meta": {
    "totalItems": 12,
    "itemCount": 2,
    "itemsPerPage": 20,
    "totalPages": 1,
    "currentPage": 1
  }
}
```

### Send Message

Sends a new message to another user.

- **URL**: `/api/messages`
- **Method**: `POST`
- **Auth**: Required (JWT)
- **Headers**: 
  - `Authorization: Bearer <token>`
  - `Content-Type: application/json`
- **Request Body**:
```json
{
  "receiverId": "a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d",
  "content": "Would you like to schedule a follow-up appointment?"
}
```

#### Response (201 Created)
```json
{
  "id": "770g0622-g41d-63f6-c938-668877662222",
  "content": "Would you like to schedule a follow-up appointment?",
  "senderId": "b4d2d7e4-3e4a-4f8b-8e1d-c7b9f8e9d7b3",
  "receiverId": "a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d",
  "isRead": false,
  "createdAt": "2023-05-10T15:00:00.000Z",
  "updatedAt": "2023-05-10T15:00:00.000Z"
}
```

#### Error Responses
- **400 Bad Request**: Invalid request body
- **404 Not Found**: Receiver not found
- **403 Forbidden**: Not allowed to message this user

### Mark Message as Read

Updates the read status of a message.

- **URL**: `/api/messages/:id/read`
- **Method**: `PATCH`
- **Auth**: Required (JWT)
- **Headers**: `Authorization: Bearer <token>`
- **URL Parameters**:
  - `id`: ID of the message to mark as read

#### Response (200 OK)
```json
{
  "id": "660f9511-f30c-52e5-b827-557766551111",
  "isRead": true,
  "updatedAt": "2023-05-10T15:10:00.000Z"
}
```

#### Error Responses
- **404 Not Found**: Message not found
- **403 Forbidden**: Not the recipient of this message

### Delete Message

Deletes a message (only the sender can delete).

- **URL**: `/api/messages/:id`
- **Method**: `DELETE` 
- **Auth**: Required (JWT)
- **Headers**: `Authorization: Bearer <token>`
- **URL Parameters**:
  - `id`: ID of the message to delete

#### Response (204 No Content)

#### Error Responses
- **404 Not Found**: Message not found
- **403 Forbidden**: Not the sender of this message

## Usage Permissions

| Endpoint | ADMIN | DOCTOR | PATIENT | STAFF |
|----------|-------|--------|---------|-------|
| Get All Messages | ✓ | ✓ | ✓ | ✓ |
| Get Conversation | ✓ | ✓ | ✓ | ✓ |
| Send Message | ✓ | ✓ | ✓ | ✓ |
| Mark as Read | ✓ | ✓ | ✓ | ✓ |
| Delete Message | ✓ | Own | Own | Own |

## Websocket Integration (Real-time)

The messaging module also supports real-time messaging through WebSockets:

- **WebSocket Endpoint**: `/messaging`
- **Event Types**:
  - `message.new`: New message received
  - `message.read`: Message marked as read
  - `message.deleted`: Message deleted

### WebSocket Authentication
Connect to the WebSocket with a valid JWT token:
```javascript
const socket = io('https://api.example.com/messaging', {
  extraHeaders: {
    Authorization: `Bearer ${jwtToken}`
  }
});
```

### Listening for Messages
```javascript
socket.on('message.new', (message) => {
  console.log('New message received:', message);
});
``` 