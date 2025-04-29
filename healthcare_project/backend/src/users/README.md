# Users Module

## Overview
The Users module is the foundation of the authentication and identity system. It manages user accounts, authentication, authorization, and user-related operations across the healthcare platform.

## Components

### Controller (`users.controller.ts`)
The controller handles HTTP requests and defines the following endpoints:

- `POST /users` - Register a new user (Admin only can create other admin users)
- `GET /users` - Retrieve users with filtering options (Admin only)
- `GET /users/:id` - Retrieve a specific user by ID
- `GET /users/me` - Retrieve the currently authenticated user's information
- `PATCH /users/:id` - Update a user's information
- `PATCH /users/:id/password` - Update a user's password
- `DELETE /users/:id` - Delete a user (Admin only)

Most endpoints are protected with JWT authentication and appropriate role-based guards.

### Service (`users.service.ts`)
The service contains the business logic for user operations:

- `create(createUserDto)` - Creates a new user with encrypted password
- `findAll(params)` - Retrieves users with filtering and pagination
- `findOne(id)` - Retrieves a user by ID
- `findByEmail(email)` - Retrieves a user by email address
- `update(id, updateUserDto)` - Updates a user's information
- `updatePassword(id, currentPassword, newPassword)` - Changes a user's password
- `remove(id)` - Deletes a user

### DTOs
- `CreateUserDto` - Validates data for user creation
- `UpdateUserDto` - Validates data for user updates
- `UpdatePasswordDto` - Validates password change requests

## Data Model
The User model includes the following fields:
- `id` - Unique identifier
- `email` - Unique email address
- `password` - Encrypted password (never exposed in responses)
- `firstName` - User's first name
- `lastName` - User's last name
- `role` - User role (ADMIN, DOCTOR, PATIENT)
- `active` - Account status flag
- `profile` - Relationship to Profile entity (for additional user details)
- `doctor` - Relationship to Doctor entity (if role is DOCTOR)
- `patient` - Relationship to Patient entity (if role is PATIENT)
- `sentMessages` - Messages sent by this user
- `receivedMessages` - Messages received by this user

## Usage Examples

### Creating a New User (Admin only for admin users)
```typescript
// POST /users
const createUserDto = {
  email: "john.doe@example.com",
  password: "SecurePassword123",
  firstName: "John",
  lastName: "Doe",
  role: "PATIENT"
};
```

### Retrieving the Authenticated User
```typescript
// GET /users/me
// Returns the current user's details with their profile information
```

## Access Control
- Creating admin users requires Admin role
- Users can view and update their own information
- Admin users can view and manage all users
- Password changes require the current password for verification 