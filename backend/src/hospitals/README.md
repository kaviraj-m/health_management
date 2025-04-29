# Hospitals Module

## Overview
The Hospitals module manages hospital entities within the healthcare system. It provides API endpoints for creating, retrieving, updating, and deleting hospital records.

## Components

### Controller (`hospitals.controller.ts`)
The controller handles HTTP requests and defines the following endpoints:

- `POST /hospitals` - Create a new hospital (Admin only)
- `GET /hospitals` - Retrieve all hospitals
- `GET /hospitals/:id` - Retrieve a specific hospital by ID
- `PATCH /hospitals/:id` - Update a hospital's information (Admin only)
- `DELETE /hospitals/:id` - Delete a hospital (Admin only)

All admin-only endpoints are protected with JWT authentication and role-based guards.

### Service (`hospitals.service.ts`)
The service contains the business logic for hospital operations:

- `create(createHospitalDto)` - Creates a new hospital record
- `findAll()` - Retrieves all hospitals
- `findOne(id)` - Retrieves a hospital by ID, including related doctors
- `update(id, updateHospitalDto)` - Updates a hospital's information
- `remove(id)` - Deletes a hospital

### DTOs (`dto/hospital.dto.ts`)
Data Transfer Objects define the structure of data for requests:

- `CreateHospitalDto` - Validates data for hospital creation
- `UpdateHospitalDto` - Validates data for hospital updates

## Data Model
The Hospital model includes the following fields:
- `id` - Unique identifier
- `name` - Hospital name
- `address` - Street address
- `city` - City location
- `state` - State/province (optional)
- `zipCode` - Postal code (optional)
- `phone` - Contact number (optional)
- `doctors` - Relationship to doctors working at the hospital

## Usage Examples

### Creating a Hospital (Admin only)
```typescript
// POST /hospitals
const createHospitalDto = {
  name: 'General Hospital',
  address: '123 Main St',
  city: 'New York',
  state: 'NY',
  zipCode: '10001',
  phone: '+12345678901'
};
```

### Retrieving a Hospital with its Doctors
```typescript
// GET /hospitals/1
// Returns the hospital with ID 1, including its associated doctors
```

## Access Control
- Creating, updating, and deleting hospitals requires Admin role
- Viewing hospitals is accessible to all authenticated users 