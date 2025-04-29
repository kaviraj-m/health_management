# Appointments Module

## Overview
The Appointments module manages healthcare appointments between patients and doctors. It provides API endpoints for creating, retrieving, updating, and canceling appointments, along with specialized operations like rescheduling and managing appointment status changes.

## Components

### Controller (`appointments.controller.ts`)
The controller handles HTTP requests and defines the following endpoints:

- `POST /appointments` - Create a new appointment
- `GET /appointments` - Retrieve all appointments with filtering options
- `GET /appointments/:id` - Retrieve a specific appointment by ID
- `GET /appointments/doctor/:doctorId` - Retrieve appointments for a specific doctor
- `GET /appointments/patient/:patientId` - Retrieve appointments for a specific patient
- `PATCH /appointments/:id` - Update an appointment
- `DELETE /appointments/:id` - Cancel an appointment
- `PATCH /appointments/:id/status` - Update appointment status

Most endpoints are protected with JWT authentication and appropriate role-based guards.

### Service (`appointments.service.ts`)
The service contains the business logic for appointment operations:

- `create(createAppointmentDto)` - Creates a new appointment after validating doctor and patient
- `findAll(params)` - Retrieves appointments with filtering and pagination
- `findOne(id)` - Retrieves an appointment by ID
- `findByDoctor(doctorId, params)` - Retrieves appointments for a specific doctor
- `findByPatient(patientId, params)` - Retrieves appointments for a specific patient
- `update(id, updateAppointmentDto)` - Updates an appointment's information
- `remove(id)` - Cancels an appointment
- `updateStatus(id, status)` - Updates the status of an appointment

### DTOs
- `CreateAppointmentDto` - Validates data for appointment creation
- `UpdateAppointmentDto` - Validates data for appointment updates
- `StatusUpdateDto` - Validates appointment status changes

## Data Model
The Appointment model includes the following fields:
- `id` - Unique identifier
- `date` - Date and time of the appointment
- `status` - Current status (SCHEDULED, COMPLETED, CANCELLED, NO_SHOW)
- `patientId` - Reference to the patient
- `doctorId` - Reference to the doctor
- `hospitalId` - Reference to the hospital
- `reason` - Reason for the appointment
- `notes` - Additional notes about the appointment
- `followUp` - Whether a follow-up is required
- `createdAt` - Creation timestamp
- `updatedAt` - Last update timestamp

## API Endpoints

### Create Appointment

Creates a new appointment between a patient and doctor.

- **URL**: `/api/appointments`
- **Method**: `POST`
- **Auth**: Required (JWT)
- **Headers**: `Authorization: Bearer <token>`
- **Request Body**:
```json
{
  "patientId": 1,
  "doctorId": 2,
  "hospitalId": 1,
  "date": "2023-12-15T10:30:00Z",
  "reason": "Annual check-up",
  "notes": "Patient requested morning appointment"
}
```

#### Response (201 Created)
```json
{
  "id": 1,
  "patientId": 1,
  "doctorId": 2,
  "hospitalId": 1,
  "date": "2023-12-15T10:30:00Z",
  "status": "SCHEDULED",
  "reason": "Annual check-up",
  "notes": "Patient requested morning appointment",
  "followUp": false,
  "createdAt": "2023-11-20T14:30:00Z",
  "updatedAt": "2023-11-20T14:30:00Z"
}
```

### Get All Appointments

Retrieves all appointments with optional filtering.

- **URL**: `/api/appointments`
- **Method**: `GET`
- **Auth**: Required (JWT)
- **Headers**: `Authorization: Bearer <token>`
- **Query Parameters**:
  - `page` (optional): Page number (default: 1)
  - `limit` (optional): Items per page (default: 10)
  - `status` (optional): Filter by status
  - `fromDate` (optional): Filter from date
  - `toDate` (optional): Filter to date
  - `doctorId` (optional): Filter by doctor
  - `patientId` (optional): Filter by patient
  - `hospitalId` (optional): Filter by hospital

#### Response (200 OK)
```json
{
  "data": [
    {
      "id": 1,
      "date": "2023-12-15T10:30:00Z",
      "status": "SCHEDULED",
      "patient": {
        "id": 1,
        "user": {
          "profile": {
            "firstName": "John",
            "lastName": "Doe"
          }
        }
      },
      "doctor": {
        "id": 2,
        "user": {
          "profile": {
            "firstName": "Jane",
            "lastName": "Smith"
          }
        },
        "specialization": "Cardiology"
      },
      "hospital": {
        "id": 1,
        "name": "General Hospital"
      },
      "reason": "Annual check-up",
      "createdAt": "2023-11-20T14:30:00Z"
    }
  ],
  "meta": {
    "totalItems": 1,
    "itemCount": 1,
    "itemsPerPage": 10,
    "totalPages": 1,
    "currentPage": 1
  }
}
```

### Get Appointment by ID

Retrieves a specific appointment.

- **URL**: `/api/appointments/:id`
- **Method**: `GET`
- **Auth**: Required (JWT)
- **Headers**: `Authorization: Bearer <token>`
- **URL Parameters**:
  - `id`: ID of the appointment

#### Response (200 OK)
```json
{
  "id": 1,
  "patientId": 1,
  "doctorId": 2,
  "hospitalId": 1,
  "date": "2023-12-15T10:30:00Z",
  "status": "SCHEDULED",
  "reason": "Annual check-up",
  "notes": "Patient requested morning appointment",
  "followUp": false,
  "createdAt": "2023-11-20T14:30:00Z",
  "updatedAt": "2023-11-20T14:30:00Z",
  "patient": {
    "id": 1,
    "user": {
      "profile": {
        "firstName": "John",
        "lastName": "Doe"
      }
    }
  },
  "doctor": {
    "id": 2,
    "user": {
      "profile": {
        "firstName": "Jane",
        "lastName": "Smith"
      }
    },
    "specialization": "Cardiology"
  },
  "hospital": {
    "id": 1,
    "name": "General Hospital"
  }
}
```

### Update Appointment

Updates an existing appointment.

- **URL**: `/api/appointments/:id`
- **Method**: `PATCH`
- **Auth**: Required (JWT)
- **Headers**: `Authorization: Bearer <token>`
- **URL Parameters**:
  - `id`: ID of the appointment
- **Request Body**:
```json
{
  "date": "2023-12-16T11:30:00Z",
  "notes": "Rescheduled at patient's request"
}
```

#### Response (200 OK)
```json
{
  "id": 1,
  "date": "2023-12-16T11:30:00Z",
  "notes": "Rescheduled at patient's request",
  "updatedAt": "2023-11-21T09:15:00Z"
}
```

### Update Appointment Status

Updates the status of an appointment.

- **URL**: `/api/appointments/:id/status`
- **Method**: `PATCH`
- **Auth**: Required (JWT)
- **Headers**: `Authorization: Bearer <token>`
- **URL Parameters**:
  - `id`: ID of the appointment
- **Request Body**:
```json
{
  "status": "COMPLETED",
  "notes": "Patient arrived on time. Follow-up recommended in 3 months."
}
```

#### Response (200 OK)
```json
{
  "id": 1,
  "status": "COMPLETED",
  "notes": "Patient arrived on time. Follow-up recommended in 3 months.",
  "updatedAt": "2023-12-16T12:45:00Z"
}
```

### Cancel Appointment

Cancels an existing appointment.

- **URL**: `/api/appointments/:id`
- **Method**: `DELETE`
- **Auth**: Required (JWT)
- **Headers**: `Authorization: Bearer <token>`
- **URL Parameters**:
  - `id`: ID of the appointment

#### Response (200 OK)
```json
{
  "message": "Appointment successfully cancelled"
}
```

## Access Control

- Patients can view, create, update, and cancel their own appointments
- Doctors can view all their appointments and update appointment status
- Admin users can manage all appointments
- Hospital staff can view appointments at their hospital 