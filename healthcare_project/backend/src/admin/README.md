# Admin API

This module provides administrative functionality for user management, statistics, and system configuration.

## Endpoints

### Get All Users

Retrieve a paginated list of all users with filtering options.

**URL**: `/api/admin/users`

**Method**: `GET`

**Headers**:
```
Authorization: Bearer [JWT_TOKEN]
```

**Query Parameters**:
- `page`: Page number for pagination (default: 1)
- `limit`: Maximum number of users per page (default: 10)
- `email`: Filter by email (optional)
- `firstName`: Filter by first name (optional)
- `lastName`: Filter by last name (optional)
- `role`: Filter by user role (ADMIN, DOCTOR, PATIENT) (optional)
- `isActive`: Filter by active status (true, false) (optional)

**Response (200 OK)**:
```json
{
  "data": [
    {
      "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "email": "patient@example.com",
      "role": "PATIENT",
      "isActive": true,
      "createdAt": "2023-07-15T10:30:45Z",
      "updatedAt": "2023-07-15T10:30:45Z",
      "profile": {
        "firstName": "Vijay",
        "lastName": "Murugan",
        "phone": "+12345678905",
        "avatar": "https://ui-avatars.com/api/?name=Vijay+Murugan&background=0D8ABC&color=fff"
      }
    },
    {
      "id": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
      "email": "doctor@healthcare.com",
      "role": "DOCTOR",
      "isActive": true,
      "createdAt": "2023-07-10T09:15:30Z",
      "updatedAt": "2023-07-10T09:15:30Z",
      "profile": {
        "firstName": "Karthik",
        "lastName": "Rajan",
        "phone": "+12345678903",
        "avatar": "https://ui-avatars.com/api/?name=Karthik+Rajan&background=0D8ABC&color=fff"
      }
    }
  ],
  "meta": {
    "total": 15,
    "page": 1,
    "limit": 10,
    "totalPages": 2
  }
}
```

**Error Responses**:
- `401 Unauthorized`: Invalid or missing token
- `403 Forbidden`: User does not have admin privileges

### Get User by ID

Retrieve a specific user by their ID.

**URL**: `/api/admin/users/:id`

**Method**: `GET`

**Headers**:
```
Authorization: Bearer [JWT_TOKEN]
```

**URL Parameters**:
- `id`: ID of the user

**Response (200 OK)**:
```json
{
  "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "email": "patient@example.com",
  "role": "PATIENT",
  "isActive": true,
  "createdAt": "2023-07-15T10:30:45Z",
  "updatedAt": "2023-07-15T10:30:45Z",
  "profile": {
    "firstName": "Vijay",
    "lastName": "Murugan",
    "phone": "+12345678905",
    "avatar": "https://ui-avatars.com/api/?name=Vijay+Murugan&background=0D8ABC&color=fff"
  },
  "patient": {
    "id": "c3d4e5f6-a7b8-9012-cdef-123456789012",
    "dateOfBirth": "1980-05-15T00:00:00.000Z",
    "gender": "Male",
    "emergencyContact": "+12345678906"
  }
}
```

**Error Responses**:
- `401 Unauthorized`: Invalid or missing token
- `403 Forbidden`: User does not have admin privileges
- `404 Not Found`: User not found

### Update User

Update a user's information.

**URL**: `/api/admin/users/:id`

**Method**: `PUT`

**Headers**:
```
Authorization: Bearer [JWT_TOKEN]
```

**URL Parameters**:
- `id`: ID of the user

**Request Body**:
```json
{
  "email": "updated.patient@example.com",
  "role": "PATIENT",
  "isActive": true
}
```

**Response (200 OK)**:
```json
{
  "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "email": "updated.patient@example.com",
  "role": "PATIENT",
  "isActive": true,
  "updatedAt": "2023-07-16T08:45:12Z"
}
```

**Error Responses**:
- `400 Bad Request`: Invalid input data
- `401 Unauthorized`: Invalid or missing token
- `403 Forbidden`: User does not have admin privileges
- `404 Not Found`: User not found
- `409 Conflict`: Email already exists

### Update User Profile

Update a user's profile information.

**URL**: `/api/admin/users/:id/profile`

**Method**: `PATCH`

**Headers**:
```
Authorization: Bearer [JWT_TOKEN]
```

**URL Parameters**:
- `id`: ID of the user

**Request Body**:
```json
{
  "firstName": "Updated",
  "lastName": "Name",
  "phone": "+10987654321",
  "avatar": "https://ui-avatars.com/api/?name=Updated+Name&background=0D8ABC&color=fff"
}
```

**Response (200 OK)**:
```json
{
  "id": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
  "firstName": "Updated",
  "lastName": "Name",
  "phone": "+10987654321",
  "avatar": "https://ui-avatars.com/api/?name=Updated+Name&background=0D8ABC&color=fff",
  "userId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "updatedAt": "2023-07-16T09:20:33Z"
}
```

**Error Responses**:
- `400 Bad Request`: Invalid input data
- `401 Unauthorized`: Invalid or missing token
- `403 Forbidden`: User does not have admin privileges
- `404 Not Found`: User not found

### Disable User

Disable a user account.

**URL**: `/api/admin/users/:id/disable`

**Method**: `PATCH`

**Headers**:
```
Authorization: Bearer [JWT_TOKEN]
```

**URL Parameters**:
- `id`: ID of the user

**Response (200 OK)**:
```json
{
  "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "email": "patient@example.com",
  "isActive": false,
  "updatedAt": "2023-07-16T11:05:42Z"
}
```

**Error Responses**:
- `400 Bad Request`: User already disabled
- `401 Unauthorized`: Invalid or missing token
- `403 Forbidden`: User does not have admin privileges or cannot disable self
- `404 Not Found`: User not found

### Enable User

Enable a disabled user account.

**URL**: `/api/admin/users/:id/enable`

**Method**: `PATCH`

**Headers**:
```
Authorization: Bearer [JWT_TOKEN]
```

**URL Parameters**:
- `id`: ID of the user

**Response (200 OK)**:
```json
{
  "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "email": "patient@example.com",
  "isActive": true,
  "updatedAt": "2023-07-16T11:15:20Z"
}
```

**Error Responses**:
- `400 Bad Request`: User already enabled
- `401 Unauthorized`: Invalid or missing token
- `403 Forbidden`: User does not have admin privileges
- `404 Not Found`: User not found

### Reset User Password

Reset a user's password.

**URL**: `/api/admin/users/:id/reset-password`

**Method**: `POST`

**Headers**:
```
Authorization: Bearer [JWT_TOKEN]
```

**URL Parameters**:
- `id`: ID of the user

**Request Body**:
```json
{
  "password": "newPassword123"
}
```

**Response (200 OK)**:
```json
{
  "message": "Password reset successfully"
}
```

**Error Responses**:
- `400 Bad Request`: Invalid password
- `401 Unauthorized`: Invalid or missing token
- `403 Forbidden`: User does not have admin privileges
- `404 Not Found`: User not found

### Get User Statistics

Get statistics about users in the system.

**URL**: `/api/admin/stats/users`

**Method**: `GET`

**Headers**:
```
Authorization: Bearer [JWT_TOKEN]
```

**Response (200 OK)**:
```json
{
  "totalUsers": 105,
  "activeUsers": 98,
  "usersByRole": {
    "ADMIN": 2,
    "DOCTOR": 15,
    "PATIENT": 88
  },
  "newUsersLast30Days": 12,
  "userGrowthRate": 11.4,
  "lastUpdated": "2023-07-16T12:30:15Z"
}
```

**Error Responses**:
- `401 Unauthorized`: Invalid or missing token
- `403 Forbidden`: User does not have admin privileges

## Access Control

All endpoints in this module require admin privileges (user role must be ADMIN). 