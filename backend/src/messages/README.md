# Messages API

This module handles real-time messaging and video/voice calling between users (patients and doctors) through RESTful APIs and WebSocket connections.

## REST Endpoints

### Get Conversations

Retrieve all conversations for the current user.

**URL**: `/api/messages/conversations`

**Method**: `GET`

**Headers**:
```
Authorization: Bearer [JWT_TOKEN]
```

**Query Parameters**:
- `limit`: Maximum number of conversations to return (default: 20)
- `page`: Page number for pagination (default: 1)

**Response (200 OK)**:
```json
{
  "data": [
    {
      "userId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "email": "doctor@healthcare.com",
      "profile": {
        "firstName": "Karthik",
        "lastName": "Rajan",
        "avatar": "https://ui-avatars.com/api/?name=Karthik+Rajan&background=0D8ABC&color=fff"
      },
      "lastMessage": {
        "id": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
        "content": "I've been feeling a bit dizzy in the mornings after taking it.",
        "isRead": false,
        "createdAt": "2023-07-15T10:30:45Z"
      },
      "unreadCount": 3
    }
  ],
  "meta": {
    "total": 5,
    "page": 1,
    "limit": 20,
    "totalPages": 1
  }
}
```

### Get Conversation with User

Retrieve the conversation history with a specific user.

**URL**: `/api/messages/conversation/:userId`

**Method**: `GET`

**Headers**:
```
Authorization: Bearer [JWT_TOKEN]
```

**URL Parameters**:
- `userId`: ID of the user to get conversation with

**Query Parameters**:
- `limit`: Maximum number of messages to return (default: 50)
- `before`: Return messages created before this timestamp (optional)

**Response (200 OK)**:
```json
{
  "data": [
    {
      "id": "c3d4e5f6-a7b8-9012-cdef-123456789012",
      "content": "Hello doctor, I have some questions about my medication.",
      "isRead": true,
      "createdAt": "2023-07-15T09:15:30Z",
      "sender": {
        "id": "d4e5f6a7-b8c9-0123-def4-56789abcdef0",
        "email": "patient@example.com",
        "profile": {
          "firstName": "Vijay",
          "lastName": "Murugan",
          "avatar": "https://ui-avatars.com/api/?name=Vijay+Murugan&background=0D8ABC&color=fff"
        }
      },
      "receiver": {
        "id": "e5f6a7b8-c9d0-1234-ef56-789abcdef012",
        "email": "doctor@healthcare.com",
        "profile": {
          "firstName": "Karthik",
          "lastName": "Rajan",
          "avatar": "https://ui-avatars.com/api/?name=Karthik+Rajan&background=0D8ABC&color=fff"
        }
      }
    },
    {
      "id": "f6a7b8c9-d0e1-2345-fa67-89abcdef0123",
      "content": "Hello! I would be happy to answer your questions. What would you like to know?",
      "isRead": true,
      "createdAt": "2023-07-15T09:18:45Z",
      "sender": {
        "id": "e5f6a7b8-c9d0-1234-ef56-789abcdef012",
        "email": "doctor@healthcare.com",
        "profile": {
          "firstName": "Karthik",
          "lastName": "Rajan",
          "avatar": "https://ui-avatars.com/api/?name=Karthik+Rajan&background=0D8ABC&color=fff"
        }
      },
      "receiver": {
        "id": "d4e5f6a7-b8c9-0123-def4-56789abcdef0",
        "email": "patient@example.com",
        "profile": {
          "firstName": "Vijay",
          "lastName": "Murugan",
          "avatar": "https://ui-avatars.com/api/?name=Vijay+Murugan&background=0D8ABC&color=fff"
        }
      }
    }
  ],
  "meta": {
    "hasMore": false
  }
}
```

### Send Message

Send a message to another user.

**URL**: `/api/messages`

**Method**: `POST`

**Headers**:
```
Authorization: Bearer [JWT_TOKEN]
```

**Request Body**:
```json
{
  "receiverId": "e5f6a7b8-c9d0-1234-ef56-789abcdef012",
  "content": "I'm experiencing some side effects with the new medication. Is that normal?"
}
```

**Response (201 Created)**:
```json
{
  "id": "a7b8c9d0-e1f2-3456-ab78-9abcdef01234",
  "content": "I'm experiencing some side effects with the new medication. Is that normal?",
  "isRead": false,
  "createdAt": "2023-07-15T10:25:32Z",
  "sender": {
    "id": "d4e5f6a7-b8c9-0123-def4-56789abcdef0",
    "email": "patient@example.com",
    "profile": {
      "firstName": "Vijay",
      "lastName": "Murugan"
    }
  },
  "receiver": {
    "id": "e5f6a7b8-c9d0-1234-ef56-789abcdef012",
    "email": "doctor@healthcare.com",
    "profile": {
      "firstName": "Karthik",
      "lastName": "Rajan"
    }
  }
}
```

### Mark Message as Read

Mark a message as read.

**URL**: `/api/messages/:id/read`

**Method**: `PATCH`

**Headers**:
```
Authorization: Bearer [JWT_TOKEN]
```

**URL Parameters**:
- `id`: ID of the message

**Response (200 OK)**:
```json
{
  "id": "a7b8c9d0-e1f2-3456-ab78-9abcdef01234",
  "isRead": true,
  "updatedAt": "2023-07-15T10:45:20Z"
}
```

**Error Responses**:
- `404 Not Found`: Message not found
- `403 Forbidden`: Unauthorized access

## WebSocket Events

The messaging system uses Socket.IO for real-time communication. Users must connect to the WebSocket server at `/chat` namespace with their JWT token for authentication.

### Connection

```javascript
// Client-side connection example
const socket = io('http://localhost:3000/chat', {
  auth: {
    token: 'JWT_TOKEN'
  }
});
```

### Events

#### Sending Messages

**Event**: `send_message`

**Client Emits**:
```json
{
  "receiverId": "e5f6a7b8-c9d0-1234-ef56-789abcdef012",
  "content": "Hello, how are you doing today?"
}
```

**Server Responds**:
```json
{
  "success": true,
  "message": {
    "id": "b8c9d0e1-f2a3-4567-bc89-abcdef012345",
    "content": "Hello, how are you doing today?",
    "isRead": false,
    "createdAt": "2023-07-15T11:30:22Z",
    "sender": {
      "id": "d4e5f6a7-b8c9-0123-def4-56789abcdef0",
      "email": "patient@example.com",
      "profile": {
        "firstName": "Vijay",
        "lastName": "Murugan"
      }
    },
    "receiver": {
      "id": "e5f6a7b8-c9d0-1234-ef56-789abcdef012",
      "email": "doctor@healthcare.com",
      "profile": {
        "firstName": "Karthik",
        "lastName": "Rajan"
      }
    }
  }
}
```

#### Receiving Messages

**Event**: `new_message`

**Server Emits**:
```json
{
  "id": "c9d0e1f2-a3b4-5678-cd9e-f01234567890",
  "content": "I need to discuss my latest test results.",
  "isRead": false,
  "createdAt": "2023-07-15T11:45:15Z",
  "sender": {
    "id": "e5f6a7b8-c9d0-1234-ef56-789abcdef012",
    "email": "doctor@healthcare.com",
    "profile": {
      "firstName": "Karthik",
      "lastName": "Rajan"
    }
  },
  "receiver": {
    "id": "d4e5f6a7-b8c9-0123-def4-56789abcdef0",
    "email": "patient@example.com",
    "profile": {
      "firstName": "Vijay",
      "lastName": "Murugan"
    }
  }
}
```

## Voice and Video Calls

WebRTC-based voice and video calls are facilitated through Socket.IO events for signaling.

### Starting a Call

**Event**: `join_video_call`

**Client Emits**:
```json
{
  "receiverId": "e5f6a7b8-c9d0-1234-ef56-789abcdef012",
  "roomId": "call-d4e5f6a7-e5f6a7b8"
}
```

**Server Responds**:
```json
{
  "success": true,
  "message": "Joined video call room"
}
```

### Receiving a Call

**Event**: `incoming_call`

**Server Emits to Receiver**:
```json
{
  "roomId": "call-d4e5f6a7-e5f6a7b8",
  "caller": {
    "id": "d4e5f6a7-b8c9-0123-def4-56789abcdef0",
    "name": "Vijay Murugan"
  }
}
```

### Answering a Call

**Event**: `answer_call`

**Client Emits**:
```json
{
  "roomId": "call-d4e5f6a7-e5f6a7b8"
}
```

**Server Responds**:
```json
{
  "success": true,
  "message": "Call answered"
}
```

**Server Emits to All in Room**:
```json
{
  "user": {
    "id": "e5f6a7b8-c9d0-1234-ef56-789abcdef012",
    "name": "Karthik Rajan"
  }
}
```

### Ending a Call

**Event**: `end_call`

**Client Emits**:
```json
{
  "roomId": "call-d4e5f6a7-e5f6a7b8"
}
```

**Server Responds**:
```json
{
  "success": true,
  "message": "Call ended"
}
```

**Server Emits to All in Room**:
```json
{
  "user": {
    "id": "d4e5f6a7-b8c9-0123-def4-56789abcdef0",
    "name": "Vijay Murugan"
  }
}
```

### WebRTC Signaling

The following events are used for WebRTC signaling:

- `ice_candidate`: Exchange ICE candidates
- `offer`: Send SDP offer
- `answer`: Send SDP answer

## Access Control

- Users can only send messages to and receive messages from other users
- Patients can chat with their assigned doctors
- Doctors can chat with their patients
- Admins can view all messages in the system 