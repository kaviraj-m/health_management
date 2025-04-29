# Patients API

This module provides endpoints for managing patient data, including creating patient profiles, updating medical information, and retrieving patient records.

## Endpoints

### Get All Patients

Retrieve a list of patients with pagination and filtering options.

**URL**: `/api/patients`

**Method**: `GET`

**Headers**:
```
Authorization: Bearer [JWT_TOKEN]
```

**Query Parameters**:
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 10)
- `sortBy`: Field to sort by (default: "createdAt")
- `sortOrder`: Sort direction ("asc" or "desc", default: "desc")
- `search`: Search term for patient name or email
- `bloodGroup`: Filter by blood group
- `doctorId`: Filter by patients of a specific doctor
- `hospitalId`: Filter by patients of a specific hospital
- `ageFrom`: Filter by minimum age
- `ageTo`: Filter by maximum age
- `gender`: Filter by gender

**Response (200 OK)**:
```json
{
  "data": [
    {
      "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "user": {
        "id": "b2c3d4e5-f6a7-8901-bcde-f1234567890a",
        "email": "john.doe@example.com",
        "profile": {
          "firstName": "John",
          "lastName": "Doe",
          "gender": "MALE",
          "dateOfBirth": "1985-06-15T00:00:00.000Z",
          "phoneNumber": "+919876543210",
          "avatar": "https://example.com/avatars/john.jpg"
        }
      },
      "bloodGroup": "O_POSITIVE",
      "height": 178,
      "weight": 75,
      "allergies": ["Peanuts", "Penicillin"],
      "emergencyContact": {
        "name": "Jane Doe",
        "relationship": "Spouse",
        "phoneNumber": "+919876543211"
      },
      "appointmentCount": 8,
      "createdAt": "2023-01-10T08:30:00Z",
      "updatedAt": "2023-06-22T14:45:00Z"
    }
  ],
  "meta": {
    "total": 320,
    "page": 1,
    "limit": 10,
    "totalPages": 32
  }
}
```

**Error Responses**:
- `401 Unauthorized`: Invalid or missing token
- `403 Forbidden`: Insufficient permissions

### Get Patient by ID

Retrieve a specific patient by ID.

**URL**: `/api/patients/:id`

**Method**: `GET`

**Headers**:
```
Authorization: Bearer [JWT_TOKEN]
```

**URL Parameters**:
- `id`: Patient ID (UUID)

**Response (200 OK)**:
```json
{
  "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "user": {
    "id": "b2c3d4e5-f6a7-8901-bcde-f1234567890a",
    "email": "john.doe@example.com",
    "profile": {
      "firstName": "John",
      "lastName": "Doe",
      "gender": "MALE",
      "dateOfBirth": "1985-06-15T00:00:00.000Z",
      "phoneNumber": "+919876543210",
      "address": "123 Main Street, Chennai",
      "city": "Chennai",
      "state": "Tamil Nadu",
      "zipCode": "600001",
      "avatar": "https://example.com/avatars/john.jpg"
    }
  },
  "bloodGroup": "O_POSITIVE",
  "height": 178,
  "weight": 75,
  "allergies": ["Peanuts", "Penicillin"],
  "medicalConditions": [
    {
      "id": "c3d4e5f6-a7b8-9012-cdef-123456789012",
      "name": "Hypertension",
      "diagnosedDate": "2020-05-10T00:00:00.000Z",
      "status": "ONGOING",
      "notes": "Under medication"
    }
  ],
  "familyHistory": [
    {
      "condition": "Diabetes",
      "relation": "Father"
    },
    {
      "condition": "Hypertension", 
      "relation": "Mother"
    }
  ],
  "emergencyContact": {
    "name": "Jane Doe",
    "relationship": "Spouse",
    "phoneNumber": "+919876543211"
  },
  "insuranceDetails": {
    "provider": "Health Insurance Co",
    "policyNumber": "HI12345678",
    "validUntil": "2024-12-31T00:00:00.000Z"
  },
  "occupation": "Software Engineer",
  "lifestyle": {
    "smokingStatus": "NON_SMOKER",
    "alcoholConsumption": "OCCASIONAL",
    "exerciseFrequency": "REGULAR",
    "dietaryPreferences": ["Vegetarian"]
  },
  "appointments": [
    {
      "id": "d4e5f6g7-h8i9-0123-jklm-456789abcdef",
      "date": "2023-06-20T10:30:00Z",
      "status": "COMPLETED",
      "doctor": {
        "id": "e5f6g7h8-i9j0-1234-klmn-567890abcdef",
        "user": {
          "profile": {
            "firstName": "Harish",
            "lastName": "Kumar"
          }
        },
        "specialization": "Cardiologist"
      }
    }
  ],
  "createdAt": "2023-01-10T08:30:00Z",
  "updatedAt": "2023-06-22T14:45:00Z"
}
```

**Error Responses**:
- `401 Unauthorized`: Invalid or missing token
- `403 Forbidden`: Insufficient permissions
- `404 Not Found`: Patient not found

### Create Patient

Create a new patient record. This endpoint is typically used when registering a new patient in the system.

**URL**: `/api/patients`

**Method**: `POST`

**Headers**:
```
Authorization: Bearer [JWT_TOKEN]
Content-Type: application/json
```

**Request Body**:
```json
{
  "userId": "b2c3d4e5-f6a7-8901-bcde-f1234567890a",
  "bloodGroup": "O_POSITIVE",
  "height": 178,
  "weight": 75,
  "allergies": ["Peanuts", "Penicillin"],
  "medicalConditions": [
    {
      "name": "Hypertension",
      "diagnosedDate": "2020-05-10T00:00:00.000Z",
      "status": "ONGOING",
      "notes": "Under medication"
    }
  ],
  "familyHistory": [
    {
      "condition": "Diabetes",
      "relation": "Father"
    },
    {
      "condition": "Hypertension", 
      "relation": "Mother"
    }
  ],
  "emergencyContact": {
    "name": "Jane Doe",
    "relationship": "Spouse",
    "phoneNumber": "+919876543211"
  },
  "insuranceDetails": {
    "provider": "Health Insurance Co",
    "policyNumber": "HI12345678",
    "validUntil": "2024-12-31T00:00:00.000Z"
  },
  "occupation": "Software Engineer",
  "lifestyle": {
    "smokingStatus": "NON_SMOKER",
    "alcoholConsumption": "OCCASIONAL",
    "exerciseFrequency": "REGULAR",
    "dietaryPreferences": ["Vegetarian"]
  }
}
```

**Response (201 Created)**:
```json
{
  "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "user": {
    "id": "b2c3d4e5-f6a7-8901-bcde-f1234567890a",
    "email": "john.doe@example.com",
    "profile": {
      "firstName": "John",
      "lastName": "Doe"
    }
  },
  "bloodGroup": "O_POSITIVE",
  "height": 178,
  "weight": 75,
  "allergies": ["Peanuts", "Penicillin"],
  "medicalConditions": [
    {
      "id": "c3d4e5f6-a7b8-9012-cdef-123456789012",
      "name": "Hypertension",
      "diagnosedDate": "2020-05-10T00:00:00.000Z",
      "status": "ONGOING",
      "notes": "Under medication"
    }
  ],
  "familyHistory": [
    {
      "condition": "Diabetes",
      "relation": "Father"
    },
    {
      "condition": "Hypertension", 
      "relation": "Mother"
    }
  ],
  "emergencyContact": {
    "name": "Jane Doe",
    "relationship": "Spouse",
    "phoneNumber": "+919876543211"
  },
  "insuranceDetails": {
    "provider": "Health Insurance Co",
    "policyNumber": "HI12345678",
    "validUntil": "2024-12-31T00:00:00.000Z"
  },
  "occupation": "Software Engineer",
  "lifestyle": {
    "smokingStatus": "NON_SMOKER",
    "alcoholConsumption": "OCCASIONAL",
    "exerciseFrequency": "REGULAR",
    "dietaryPreferences": ["Vegetarian"]
  },
  "createdAt": "2023-07-15T10:30:00Z",
  "updatedAt": "2023-07-15T10:30:00Z"
}
```

**Error Responses**:
- `400 Bad Request`: Invalid data or missing required fields
- `401 Unauthorized`: Invalid or missing token
- `403 Forbidden`: Insufficient permissions
- `404 Not Found`: User not found
- `409 Conflict`: Patient record already exists for this user

### Update Patient

Update an existing patient record.

**URL**: `/api/patients/:id`

**Method**: `PATCH`

**Headers**:
```
Authorization: Bearer [JWT_TOKEN]
Content-Type: application/json
```

**URL Parameters**:
- `id`: Patient ID (UUID)

**Request Body** (all fields optional):
```json
{
  "bloodGroup": "O_NEGATIVE",
  "height": 180,
  "weight": 78,
  "allergies": ["Peanuts", "Penicillin", "Shellfish"],
  "emergencyContact": {
    "name": "Jane Doe",
    "relationship": "Spouse",
    "phoneNumber": "+919876543211"
  },
  "insuranceDetails": {
    "provider": "New Health Insurance Co",
    "policyNumber": "NH12345678",
    "validUntil": "2025-12-31T00:00:00.000Z"
  },
  "occupation": "Senior Software Engineer",
  "lifestyle": {
    "smokingStatus": "NON_SMOKER",
    "alcoholConsumption": "RARE",
    "exerciseFrequency": "REGULAR",
    "dietaryPreferences": ["Vegetarian", "Low Carb"]
  }
}
```

**Response (200 OK)**:
```json
{
  "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "bloodGroup": "O_NEGATIVE",
  "height": 180,
  "weight": 78,
  "allergies": ["Peanuts", "Penicillin", "Shellfish"],
  "emergencyContact": {
    "name": "Jane Doe",
    "relationship": "Spouse",
    "phoneNumber": "+919876543211"
  },
  "insuranceDetails": {
    "provider": "New Health Insurance Co",
    "policyNumber": "NH12345678",
    "validUntil": "2025-12-31T00:00:00.000Z"
  },
  "occupation": "Senior Software Engineer",
  "lifestyle": {
    "smokingStatus": "NON_SMOKER",
    "alcoholConsumption": "RARE",
    "exerciseFrequency": "REGULAR",
    "dietaryPreferences": ["Vegetarian", "Low Carb"]
  },
  "updatedAt": "2023-07-22T15:45:00Z"
}
```

**Error Responses**:
- `400 Bad Request`: Invalid data
- `401 Unauthorized`: Invalid or missing token
- `403 Forbidden`: Insufficient permissions
- `404 Not Found`: Patient not found

### Delete Patient

Delete a patient record.

**URL**: `/api/patients/:id`

**Method**: `DELETE`

**Headers**:
```
Authorization: Bearer [JWT_TOKEN]
```

**URL Parameters**:
- `id`: Patient ID (UUID)

**Response (204 No Content)**

**Error Responses**:
- `401 Unauthorized`: Invalid or missing token
- `403 Forbidden`: Insufficient permissions
- `404 Not Found`: Patient not found
- `409 Conflict`: Cannot delete patient with active appointments

### Add Medical Condition

Add a new medical condition to a patient's record.

**URL**: `/api/patients/:id/medical-conditions`

**Method**: `POST`

**Headers**:
```
Authorization: Bearer [JWT_TOKEN]
Content-Type: application/json
```

**URL Parameters**:
- `id`: Patient ID (UUID)

**Request Body**:
```json
{
  "name": "Asthma",
  "diagnosedDate": "2021-03-15T00:00:00.000Z",
  "status": "ONGOING",
  "notes": "Mild condition, managed with inhalers"
}
```

**Response (201 Created)**:
```json
{
  "id": "f6g7h8i9-j0k1-2345-lmno-6789abcdef01",
  "name": "Asthma",
  "diagnosedDate": "2021-03-15T00:00:00.000Z",
  "status": "ONGOING",
  "notes": "Mild condition, managed with inhalers",
  "createdAt": "2023-07-15T10:30:00Z",
  "updatedAt": "2023-07-15T10:30:00Z"
}
```

**Error Responses**:
- `400 Bad Request`: Invalid data or missing required fields
- `401 Unauthorized`: Invalid or missing token
- `403 Forbidden`: Insufficient permissions
- `404 Not Found`: Patient not found

### Update Medical Condition

Update an existing medical condition in a patient's record.

**URL**: `/api/patients/:patientId/medical-conditions/:conditionId`

**Method**: `PATCH`

**Headers**:
```
Authorization: Bearer [JWT_TOKEN]
Content-Type: application/json
```

**URL Parameters**:
- `patientId`: Patient ID (UUID)
- `conditionId`: Medical Condition ID (UUID)

**Request Body** (all fields optional):
```json
{
  "status": "RESOLVED",
  "notes": "Condition resolved after treatment",
  "resolvedDate": "2023-07-10T00:00:00.000Z"
}
```

**Response (200 OK)**:
```json
{
  "id": "f6g7h8i9-j0k1-2345-lmno-6789abcdef01",
  "name": "Asthma",
  "diagnosedDate": "2021-03-15T00:00:00.000Z",
  "status": "RESOLVED",
  "notes": "Condition resolved after treatment",
  "resolvedDate": "2023-07-10T00:00:00.000Z",
  "updatedAt": "2023-07-22T15:45:00Z"
}
```

**Error Responses**:
- `400 Bad Request`: Invalid data
- `401 Unauthorized`: Invalid or missing token
- `403 Forbidden`: Insufficient permissions
- `404 Not Found`: Patient or medical condition not found

### Delete Medical Condition

Remove a medical condition from a patient's record.

**URL**: `/api/patients/:patientId/medical-conditions/:conditionId`

**Method**: `DELETE`

**Headers**:
```
Authorization: Bearer [JWT_TOKEN]
```

**URL Parameters**:
- `patientId`: Patient ID (UUID)
- `conditionId`: Medical Condition ID (UUID)

**Response (204 No Content)**

**Error Responses**:
- `401 Unauthorized`: Invalid or missing token
- `403 Forbidden`: Insufficient permissions
- `404 Not Found`: Patient or medical condition not found

### Get Patient's Appointments

Retrieve a list of appointments for a specific patient.

**URL**: `/api/patients/:id/appointments`

**Method**: `GET`

**Headers**:
```
Authorization: Bearer [JWT_TOKEN]
```

**URL Parameters**:
- `id`: Patient ID (UUID)

**Query Parameters**:
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 10)
- `status`: Filter by appointment status
- `fromDate`: Filter from this date
- `toDate`: Filter until this date
- `doctorId`: Filter by doctor ID
- `hospitalId`: Filter by hospital ID

**Response (200 OK)**:
```json
{
  "data": [
    {
      "id": "d4e5f6g7-h8i9-0123-jklm-456789abcdef",
      "date": "2023-06-20T10:30:00Z",
      "status": "COMPLETED",
      "type": "FOLLOW_UP",
      "reason": "Blood pressure check",
      "doctor": {
        "id": "e5f6g7h8-i9j0-1234-klmn-567890abcdef",
        "user": {
          "profile": {
            "firstName": "Harish",
            "lastName": "Kumar"
          }
        },
        "specialization": "Cardiologist"
      },
      "hospital": {
        "id": "g7h8i9j0-k1l2-3456-mnop-8901abcdef23",
        "name": "City Medical Center"
      },
      "notes": "Blood pressure slightly elevated. Adjusted medication dosage.",
      "createdAt": "2023-06-01T08:15:00Z",
      "updatedAt": "2023-06-20T11:45:00Z"
    }
  ],
  "meta": {
    "total": 8,
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

### Get Patient's Health Records

Retrieve a list of health records for a specific patient.

**URL**: `/api/patients/:id/health-records`

**Method**: `GET`

**Headers**:
```
Authorization: Bearer [JWT_TOKEN]
```

**URL Parameters**:
- `id`: Patient ID (UUID)

**Query Parameters**:
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 10)
- `type`: Filter by record type
- `fromDate`: Filter from this date
- `toDate`: Filter until this date
- `doctorId`: Filter by doctor who created the record

**Response (200 OK)**:
```json
{
  "data": [
    {
      "id": "h8i9j0k1-l2m3-4567-nopq-90abcdef1234",
      "type": "PRESCRIPTION",
      "date": "2023-06-20T11:00:00Z",
      "title": "Hypertension Medication",
      "description": "Prescription for blood pressure management",
      "attachments": [
        {
          "id": "i9j0k1l2-m3n4-5678-opqr-abcdef12345",
          "filename": "prescription_june2023.pdf",
          "fileUrl": "https://example.com/files/prescription_june2023.pdf",
          "fileSize": 1024,
          "uploadedAt": "2023-06-20T11:15:00Z"
        }
      ],
      "doctor": {
        "id": "e5f6g7h8-i9j0-1234-klmn-567890abcdef",
        "user": {
          "profile": {
            "firstName": "Harish",
            "lastName": "Kumar"
          }
        }
      },
      "hospital": {
        "id": "g7h8i9j0-k1l2-3456-mnop-8901abcdef23",
        "name": "City Medical Center"
      },
      "createdAt": "2023-06-20T11:15:00Z",
      "updatedAt": "2023-06-20T11:15:00Z"
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
- `403 Forbidden`: Insufficient permissions
- `404 Not Found`: Patient not found

### Get Patient's Medication Reminders

Retrieve a list of medication reminders for a specific patient.

**URL**: `/api/patients/:id/medication-reminders`

**Method**: `GET`

**Headers**:
```
Authorization: Bearer [JWT_TOKEN]
```

**URL Parameters**:
- `id`: Patient ID (UUID)

**Query Parameters**:
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 10)
- `active`: Filter by active status (true/false)
- `fromDate`: Filter from this date
- `toDate`: Filter until this date

**Response (200 OK)**:
```json
{
  "data": [
    {
      "id": "j0k1l2m3-n4o5-6789-pqrs-bcdef123456",
      "medication": "Atenolol 50mg",
      "dosage": "1 tablet",
      "frequency": "DAILY",
      "startDate": "2023-06-20T00:00:00Z",
      "endDate": "2023-09-20T00:00:00Z",
      "time": ["08:00", "20:00"],
      "instructions": "Take with food",
      "isActive": true,
      "doctor": {
        "id": "e5f6g7h8-i9j0-1234-klmn-567890abcdef",
        "user": {
          "profile": {
            "firstName": "Harish",
            "lastName": "Kumar"
          }
        }
      },
      "createdAt": "2023-06-20T11:30:00Z",
      "updatedAt": "2023-06-20T11:30:00Z"
    }
  ],
  "meta": {
    "total": 3,
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

### Get Patient Stats

Retrieve statistics for a specific patient.

**URL**: `/api/patients/:id/stats`

**Method**: `GET`

**Headers**:
```
Authorization: Bearer [JWT_TOKEN]
```

**URL Parameters**:
- `id`: Patient ID (UUID)

**Response (200 OK)**:
```json
{
  "appointmentStats": {
    "total": 8,
    "completed": 6,
    "scheduled": 2,
    "cancelled": 0,
    "byDoctor": {
      "Cardiologist": 4,
      "General Physician": 3,
      "Pulmonologist": 1
    }
  },
  "healthRecordStats": {
    "total": 15,
    "byType": {
      "PRESCRIPTION": 8,
      "LAB_REPORT": 5,
      "IMAGING": 2
    }
  },
  "medicationStats": {
    "active": 3,
    "completed": 5,
    "upcoming": 0
  },
  "vitalsTrend": {
    "bloodPressure": [
      {"date": "2023-01-15", "value": "130/85"},
      {"date": "2023-03-20", "value": "128/82"},
      {"date": "2023-06-20", "value": "125/80"}
    ],
    "weight": [
      {"date": "2023-01-15", "value": 76},
      {"date": "2023-03-20", "value": 75},
      {"date": "2023-06-20", "value": 78}
    ]
  }
}
```

**Error Responses**:
- `401 Unauthorized`: Invalid or missing token
- `403 Forbidden`: Insufficient permissions
- `404 Not Found`: Patient not found

### Get Current Patient Profile

Retrieve the current patient's profile using the JWT token.

**URL**: `/api/patients/profile`

**Method**: `GET`

**Headers**:
```
Authorization: Bearer [JWT_TOKEN]
```

**Response (200 OK)**:
```json
{
  "id": 1,
  "dateOfBirth": "1985-06-15T00:00:00.000Z",
  "gender": "Male",
  "emergencyContact": "+919876543211",
  "userId": 5,
  "user": {
    "id": 5,
    "email": "john.doe@example.com",
    "role": "PATIENT",
    "profile": {
      "firstName": "John",
      "lastName": "Doe",
      "phone": "+919876543210",
      "avatar": "https://example.com/avatars/john.jpg"
    }
  },
  "medicalConditions": [
    {
      "id": 3,
      "name": "Hypertension",
      "description": "High blood pressure",
      "diagnosedAt": "2020-05-10T00:00:00.000Z"
    }
  ],
  "healthRecords": [
    {
      "id": 7,
      "date": "2023-06-20T00:00:00.000Z",
      "bloodPressure": "120/80",
      "heartRate": 72,
      "bloodGlucose": 90,
      "notes": "Regular checkup"
    }
  ],
  "appointments": [
    {
      "id": 12,
      "date": "2023-06-20T10:30:00.000Z",
      "status": "COMPLETED",
      "doctor": {
        "id": 4,
        "user": {
          "profile": {
            "firstName": "Harish",
            "lastName": "Kumar"
          }
        },
        "hospital": {
          "name": "City Hospital"
        }
      },
      "hospital": {
        "name": "City Hospital"
      }
    }
  ],
  "medicationReminders": [
    {
      "id": 9,
      "medicationName": "Lisinopril",
      "dosage": "10mg",
      "frequency": "Daily",
      "startDate": "2023-01-01T00:00:00.000Z",
      "endDate": "2023-12-31T00:00:00.000Z",
      "reminderTime": "08:00:00"
    }
  ],
  "dosAndDonts": [
    {
      "id": 5,
      "type": "DO",
      "description": "Regular exercise",
      "importance": "HIGH"
    },
    {
      "id": 6,
      "type": "DONT",
      "description": "Avoid high sodium foods",
      "importance": "HIGH"
    }
  ]
}
```

**Error Responses**:
- `401 Unauthorized`: Invalid or missing token
- `403 Forbidden`: User is not a patient
- `404 Not Found`: Patient profile not found

### Update Current Patient Profile

Update the current patient's profile using the JWT token.

**URL**: `/api/patients/profile`

**Method**: `PATCH`

**Headers**:
```
Authorization: Bearer [JWT_TOKEN]
Content-Type: application/json
```

**Request Body**:
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "phone": "+919876543210",
  "dateOfBirth": "1985-06-15",
  "gender": "Male",
  "emergencyContact": "+919876543211",
  "avatar": "https://example.com/avatars/john.jpg"
}
```

All fields in the request body are optional. Only the fields that are provided will be updated.

**Response (200 OK)**:
```json
{
  "id": 1,
  "dateOfBirth": "1985-06-15T00:00:00.000Z",
  "gender": "Male",
  "emergencyContact": "+919876543211",
  "userId": 5,
  "user": {
    "id": 5,
    "email": "john.doe@example.com",
    "role": "PATIENT",
    "profile": {
      "firstName": "John",
      "lastName": "Doe",
      "phone": "+919876543210",
      "avatar": "https://example.com/avatars/john.jpg"
    }
  }
}
```

**Error Responses**:
- `401 Unauthorized`: Invalid or missing token
- `403 Forbidden`: User is not a patient
- `404 Not Found`: Patient profile not found

## Access Control

- Patients can access only their own information
- Doctors can view patients assigned to them
- Hospital staff can view patients registered with their hospital
- Admins have full access to all patient records 