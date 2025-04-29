# Doctors Module

## Overview
The Doctors module manages doctor entities within the healthcare system. It provides API endpoints for creating, retrieving, updating, and deleting doctor records, as well as handling doctor-specific operations.

## Components

### Controller (`doctors.controller.ts`)
The controller handles HTTP requests and defines the following endpoints:

- `POST /doctors` - Create a new doctor (Admin only)
- `GET /doctors` - Retrieve all doctors with filtering options
- `GET /doctors/:id` - Retrieve a specific doctor by ID
- `GET /doctors/hospital/:hospitalId` - Retrieve doctors by hospital
- `PATCH /doctors/:id` - Update a doctor's information (Admin or the doctor themselves)
- `DELETE /doctors/:id` - Delete a doctor (Admin only)

Most endpoints are protected with JWT authentication and appropriate role-based guards.

### Service (`doctors.service.ts`)
The service contains the business logic for doctor operations:

- `create(createDoctorDto)` - Creates a new doctor record and associates with a hospital
- `findAll(params)` - Retrieves doctors with filtering and pagination
- `findOne(id)` - Retrieves a doctor by ID
- `findByHospital(hospitalId)` - Retrieves doctors associated with a specific hospital
- `update(id, updateDoctorDto)` - Updates a doctor's information
- `remove(id)` - Deletes a doctor

### DTOs
- `CreateDoctorDto` - Validates data for doctor creation
- `UpdateDoctorDto` - Validates data for doctor updates

## Data Model
The Doctor model includes the following fields:
- `id` - Unique identifier
- `userId` - Reference to the associated User account
- `hospitalId` - Reference to the associated Hospital
- `specialization` - Doctor's medical specialization
- `experience` - Years of experience
- `consultationFee` - Fee for consultations
- `availability` - Working hours and availability information
- `bio` - Professional biography
- `user` - Relationship to User entity (for personal info)
- `hospital` - Relationship to Hospital entity
- `appointments` - Relationship to Appointments

## Usage Examples

### Creating a Doctor (Admin only)
```typescript
// POST /doctors
const createDoctorDto = {
  userId: "user-uuid",
  hospitalId: "hospital-uuid",
  specialization: "Cardiology",
  experience: 10,
  consultationFee: 150,
  availability: "Mon-Fri: 9AM-5PM",
  bio: "Specialized in interventional cardiology with 10 years of experience"
};
```

### Filtering Doctors
```typescript
// GET /doctors?specialization=Cardiology&hospitalId=hospital-uuid
// Returns cardiologists at the specified hospital
```

## Access Control
- Creating and deleting doctors requires Admin role
- Doctors can update their own information
- Viewing doctor information is accessible to all authenticated users 