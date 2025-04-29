# Authentication Module

## Overview
The Authentication module provides user authentication and authorization services for the healthcare platform. It handles user registration, login, JWT token generation, and role-based access control.

## Components

### Controller (`auth.controller.ts`)
The controller handles HTTP requests and defines the following endpoints:

- `POST /auth/register` - Register a new user account
- `POST /auth/login` - Authenticate a user and receive a JWT token
- `GET /auth/me` - Get the current authenticated user's profile

### Service (`auth.service.ts`)
The service contains the business logic for authentication:

- `register(registerDto)` - Registers a new user with encrypted password
- `login(loginDto)` - Validates credentials and generates JWT token
- `validateUser(email, password)` - Verifies user credentials

### Guards
- `JwtAuthGuard` - Protects routes requiring authentication
- `RolesGuard` - Enforces role-based access control

### Decorators
- `@Roles(...)` - Specifies which roles can access a route
- `@GetUser()` - Extracts the user from the request object

### DTOs
- `RegisterDto` - Validates registration data
- `LoginDto` - Validates login credentials
- `AuthResponseDto` - Structures the authentication response

## Usage Examples

### User Registration
```typescript
// POST /auth/register
const registerDto = {
  email: "john.doe@example.com",
  password: "SecurePassword123",
  firstName: "John",
  lastName: "Doe"
};

// Response
{
  "user": {
    "id": 1,
    "email": "john.doe@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "role": "PATIENT"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### User Login
```typescript
// POST /auth/login
const loginDto = {
  email: "john.doe@example.com",
  password: "SecurePassword123"
};

// Response
{
  "user": {
    "id": 1,
    "email": "john.doe@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "role": "PATIENT"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Protecting Routes
```typescript
@Get('protected-route')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(Role.ADMIN)
@ApiBearerAuth()
protectedRoute() {
  // Only accessible to authenticated admin users
}
```

## JWT Token
The JWT token contains the following payload:
- `sub` - User ID
- `email` - User email
- `role` - User role
- `iat` - Issued at timestamp
- `exp` - Expiration timestamp

## Security Considerations
- Passwords are hashed using bcrypt
- JWT tokens expire after a configurable time
- Sensitive routes are protected with appropriate guards
- Role-based access control prevents unauthorized operations

# Authentication API

This module handles user authentication including login, registration, password reset and user profile management.

## Endpoints

### Register User

Register a new user account.

**URL**: `/api/auth/register`

**Method**: `POST`

**Request Body**:
```json
{
  "email": "user@example.com",
  "password": "password123",
  "role": "PATIENT", // PATIENT, DOCTOR, ADMIN
  "profile": {
    "firstName": "John",
    "lastName": "Doe",
    "phone": "+12345678901"
  }
}
```

**Response (201 Created)**:
```json
{
  "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "email": "user@example.com",
  "role": "PATIENT",
  "isActive": true,
  "createdAt": "2023-07-15T10:30:45Z",
  "updatedAt": "2023-07-15T10:30:45Z",
  "profile": {
    "id": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
    "firstName": "John",
    "lastName": "Doe",
    "phone": "+12345678901",
    "avatar": "https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff"
  }
}
```

**Error Responses**:
- `400 Bad Request`: Invalid input data
- `409 Conflict`: Email already exists

### Login

Authenticate user and receive JWT token.

**URL**: `/api/auth/login`

**Method**: `POST`

**Request Body**:
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response (200 OK)**:
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "email": "user@example.com",
    "role": "PATIENT",
    "isActive": true,
    "profile": {
      "firstName": "John",
      "lastName": "Doe",
      "phone": "+12345678901",
      "avatar": "https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff"
    }
  }
}
```

**Error Responses**:
- `401 Unauthorized`: Invalid credentials
- `403 Forbidden`: Account disabled

### Get Current User

Get the currently authenticated user's information.

**URL**: `/api/auth/me`

**Method**: `GET`

**Headers**:
```
Authorization: Bearer [JWT_TOKEN]
```

**Response (200 OK)**:
```json
{
  "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "email": "user@example.com",
  "role": "PATIENT",
  "isActive": true,
  "createdAt": "2023-07-15T10:30:45Z",
  "updatedAt": "2023-07-15T10:30:45Z",
  "profile": {
    "id": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
    "firstName": "John",
    "lastName": "Doe",
    "phone": "+12345678901",
    "avatar": "https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff"
  }
}
```

**Error Responses**:
- `401 Unauthorized`: Invalid or expired token

### Forgot Password

Request a password reset token.

**URL**: `/api/auth/forgot-password`

**Method**: `POST`

**Request Body**:
```json
{
  "email": "user@example.com"
}
```

**Response (200 OK)**:
```json
{
  "message": "Password reset instructions have been sent to your email"
}
```

### Reset Password

Reset password using the token.

**URL**: `/api/auth/reset-password`

**Method**: `POST`

**Request Body**:
```json
{
  "token": "a1b2c3d4e5f6g7h8i9j0",
  "password": "newPassword123"
}
```

**Response (200 OK)**:
```json
{
  "message": "Password has been reset successfully"
}
```

**Error Responses**:
- `400 Bad Request`: Invalid token or password
- `410 Gone`: Token expired

## Security

All endpoints except for registration, login, and password reset require a valid JWT token in the Authorization header. 