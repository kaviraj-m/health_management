# Medication Reminders API

This module provides functionality to manage medication reminders for patients, including creating, retrieving, updating, and deleting reminders.

## Endpoints

### Get Patient Medication Reminders

Retrieve medication reminders for a specific patient.

**URL**: `/api/medication-reminders/patient/:patientId`

**Method**: `GET`

**Headers**:
```
Authorization: Bearer [JWT_TOKEN]
```

**URL Parameters**:
- `patientId`: ID of the patient

**Query Parameters**:
- `active`: Filter by active status (true, false) (optional)
- `page`: Page number for pagination (default: 1)
- `limit`: Maximum number of reminders per page (default: 10)

**Response (200 OK)**:
```json
{
  "data": [
    {
      "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "medication": "Metformin",
      "dosage": "500mg",
      "frequency": "Twice daily",
      "startDate": "2023-01-01T00:00:00.000Z",
      "endDate": null,
      "time": [
        "2023-01-01T08:00:00.000Z",
        "2023-01-01T20:00:00.000Z"
      ],
      "instructions": "Take with food",
      "isActive": true,
      "createdAt": "2023-01-01T09:15:30Z",
      "updatedAt": "2023-01-01T09:15:30Z",
      "patientId": "b2c3d4e5-f6a7-8901-bcde-f12345678901"
    },
    {
      "id": "c3d4e5f6-a7b8-9012-cdef-123456789012",
      "medication": "Atorvastatin",
      "dosage": "20mg",
      "frequency": "Once daily",
      "startDate": "2023-01-01T00:00:00.000Z",
      "endDate": null,
      "time": [
        "2023-01-01T20:00:00.000Z"
      ],
      "instructions": "Take in the evening",
      "isActive": true,
      "createdAt": "2023-01-01T09:20:15Z",
      "updatedAt": "2023-01-01T09:20:15Z",
      "patientId": "b2c3d4e5-f6a7-8901-bcde-f12345678901"
    }
  ],
  "meta": {
    "total": 2,
    "page": 1,
    "limit": 10,
    "totalPages": 1
  }
}
```

**Error Responses**:
- `401 Unauthorized`: Invalid or missing token
- `403 Forbidden`: Insufficient permissions
- `404 Not Found`: Patient not found

### Get Medication Reminder by ID

Retrieve a specific medication reminder by its ID.

**URL**: `/api/medication-reminders/:id`

**Method**: `GET`

**Headers**:
```
Authorization: Bearer [JWT_TOKEN]
```

**URL Parameters**:
- `id`: ID of the medication reminder

**Response (200 OK)**:
```json
{
  "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "medication": "Metformin",
  "dosage": "500mg",
  "frequency": "Twice daily",
  "startDate": "2023-01-01T00:00:00.000Z",
  "endDate": null,
  "time": [
    "2023-01-01T08:00:00.000Z",
    "2023-01-01T20:00:00.000Z"
  ],
  "instructions": "Take with food",
  "isActive": true,
  "createdAt": "2023-01-01T09:15:30Z",
  "updatedAt": "2023-01-01T09:15:30Z",
  "patientId": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
  "patient": {
    "user": {
      "profile": {
        "firstName": "Vijay",
        "lastName": "Murugan"
      }
    }
  }
}
```

**Error Responses**:
- `401 Unauthorized`: Invalid or missing token
- `403 Forbidden`: Insufficient permissions
- `404 Not Found`: Medication reminder not found

### Create Medication Reminder

Create a new medication reminder for a patient.

**URL**: `/api/medication-reminders/patient/:patientId`

**Method**: `POST`

**Headers**:
```
Authorization: Bearer [JWT_TOKEN]
```

**URL Parameters**:
- `patientId`: ID of the patient

**Request Body**:
```json
{
  "medication": "Lisinopril",
  "dosage": "10mg",
  "frequency": "Once daily",
  "startDate": "2023-03-15",
  "endDate": null,
  "time": [
    "2023-03-15T08:00:00Z"
  ],
  "instructions": "Take in the morning with water",
  "isActive": true
}
```

**Response (201 Created)**:
```json
{
  "id": "d4e5f6a7-b8c9-0123-def4-56789abcdef0",
  "medication": "Lisinopril",
  "dosage": "10mg",
  "frequency": "Once daily",
  "startDate": "2023-03-15T00:00:00.000Z",
  "endDate": null,
  "time": [
    "2023-03-15T08:00:00.000Z"
  ],
  "instructions": "Take in the morning with water",
  "isActive": true,
  "createdAt": "2023-03-15T10:45:22Z",
  "updatedAt": "2023-03-15T10:45:22Z",
  "patientId": "b2c3d4e5-f6a7-8901-bcde-f12345678901"
}
```

**Error Responses**:
- `400 Bad Request`: Invalid input data
- `401 Unauthorized`: Invalid or missing token
- `403 Forbidden`: Insufficient permissions
- `404 Not Found`: Patient not found

### Update Medication Reminder

Update an existing medication reminder.

**URL**: `/api/medication-reminders/:id`

**Method**: `PATCH`

**Headers**:
```
Authorization: Bearer [JWT_TOKEN]
```

**URL Parameters**:
- `id`: ID of the medication reminder

**Request Body**:
```json
{
  "dosage": "5mg",
  "instructions": "Take in the morning with or without food",
  "time": [
    "2023-03-15T07:30:00Z"
  ]
}
```

**Response (200 OK)**:
```json
{
  "id": "d4e5f6a7-b8c9-0123-def4-56789abcdef0",
  "dosage": "5mg",
  "instructions": "Take in the morning with or without food",
  "time": [
    "2023-03-15T07:30:00.000Z"
  ],
  "updatedAt": "2023-03-15T11:30:15Z"
}
```

**Error Responses**:
- `400 Bad Request`: Invalid input data
- `401 Unauthorized`: Invalid or missing token
- `403 Forbidden`: Insufficient permissions
- `404 Not Found`: Medication reminder not found

### Delete Medication Reminder

Delete a medication reminder.

**URL**: `/api/medication-reminders/:id`

**Method**: `DELETE`

**Headers**:
```
Authorization: Bearer [JWT_TOKEN]
```

**URL Parameters**:
- `id`: ID of the medication reminder

**Response (200 OK)**:
```json
{
  "message": "Medication reminder successfully deleted"
}
```

**Error Responses**:
- `401 Unauthorized`: Invalid or missing token
- `403 Forbidden`: Insufficient permissions
- `404 Not Found`: Medication reminder not found

### Toggle Medication Reminder Status

Activate or deactivate a medication reminder.

**URL**: `/api/medication-reminders/:id/toggle`

**Method**: `PATCH`

**Headers**:
```
Authorization: Bearer [JWT_TOKEN]
```

**URL Parameters**:
- `id`: ID of the medication reminder

**Request Body**:
```json
{
  "isActive": false
}
```

**Response (200 OK)**:
```json
{
  "id": "d4e5f6a7-b8c9-0123-def4-56789abcdef0",
  "isActive": false,
  "updatedAt": "2023-03-15T14:25:45Z"
}
```

**Error Responses**:
- `400 Bad Request`: Invalid input data
- `401 Unauthorized`: Invalid or missing token
- `403 Forbidden`: Insufficient permissions
- `404 Not Found`: Medication reminder not found

### Get Today's Medication Reminders

Retrieve medication reminders for a specific patient scheduled for today.

**URL**: `/api/medication-reminders/patient/:patientId/today`

**Method**: `GET`

**Headers**:
```
Authorization: Bearer [JWT_TOKEN]
```

**URL Parameters**:
- `patientId`: ID of the patient

**Response (200 OK)**:
```json
[
  {
    "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "medication": "Metformin",
    "dosage": "500mg",
    "time": [
      "08:00:00",
      "20:00:00"
    ],
    "instructions": "Take with food",
    "isActive": true
  },
  {
    "id": "c3d4e5f6-a7b8-9012-cdef-123456789012",
    "medication": "Atorvastatin",
    "dosage": "20mg",
    "time": [
      "20:00:00"
    ],
    "instructions": "Take in the evening",
    "isActive": true
  }
]
```

**Error Responses**:
- `401 Unauthorized`: Invalid or missing token
- `403 Forbidden`: Insufficient permissions
- `404 Not Found`: Patient not found

## Access Control

- Patients can view, create, update, and delete their own medication reminders
- Doctors can view medication reminders for patients assigned to them
- Doctors can create and update medication reminders for patients assigned to them
- Admin users can view, create, update, and delete all medication reminders 