# Health Records API

This module provides functionality to manage patient health records, including vital signs, metrics, and medical notes.

## Endpoints

### Get Patient Health Records

Retrieve health records for a specific patient.

**URL**: `/api/health-records/patient/:patientId`

**Method**: `GET`

**Headers**:
```
Authorization: Bearer [JWT_TOKEN]
```

**URL Parameters**:
- `patientId`: ID of the patient

**Query Parameters**:
- `from`: Start date (format: YYYY-MM-DD) (optional)
- `to`: End date (format: YYYY-MM-DD) (optional)
- `page`: Page number for pagination (default: 1)
- `limit`: Maximum number of records per page (default: 10)

**Response (200 OK)**:
```json
{
  "data": [
    {
      "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "date": "2023-02-15T00:00:00.000Z",
      "bloodPressure": "130/85",
      "heartRate": 75,
      "bloodGlucose": 130,
      "weight": 70.5,
      "notes": "Slightly elevated glucose",
      "createdAt": "2023-02-15T10:30:45Z",
      "updatedAt": "2023-02-15T10:30:45Z",
      "patientId": "b2c3d4e5-f6a7-8901-bcde-f12345678901"
    },
    {
      "id": "c3d4e5f6-a7b8-9012-cdef-123456789012",
      "date": "2023-01-10T00:00:00.000Z",
      "bloodPressure": "120/80",
      "heartRate": 72,
      "bloodGlucose": 110,
      "weight": 70.2,
      "notes": "Normal readings",
      "createdAt": "2023-01-10T09:15:30Z",
      "updatedAt": "2023-01-10T09:15:30Z",
      "patientId": "b2c3d4e5-f6a7-8901-bcde-f12345678901"
    }
  ],
  "meta": {
    "total": 5,
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

### Get Health Record by ID

Retrieve a specific health record by its ID.

**URL**: `/api/health-records/:id`

**Method**: `GET`

**Headers**:
```
Authorization: Bearer [JWT_TOKEN]
```

**URL Parameters**:
- `id`: ID of the health record

**Response (200 OK)**:
```json
{
  "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "date": "2023-02-15T00:00:00.000Z",
  "bloodPressure": "130/85",
  "heartRate": 75,
  "bloodGlucose": 130,
  "weight": 70.5,
  "notes": "Slightly elevated glucose",
  "createdAt": "2023-02-15T10:30:45Z",
  "updatedAt": "2023-02-15T10:30:45Z",
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
- `404 Not Found`: Health record not found

### Create Health Record

Create a new health record for a patient.

**URL**: `/api/health-records/patient/:patientId`

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
  "date": "2023-03-20",
  "bloodPressure": "125/82",
  "heartRate": 74,
  "bloodGlucose": 115,
  "weight": 70.8,
  "notes": "Follow-up checkup, all readings within normal range"
}
```

**Response (201 Created)**:
```json
{
  "id": "d4e5f6a7-b8c9-0123-def4-56789abcdef0",
  "date": "2023-03-20T00:00:00.000Z",
  "bloodPressure": "125/82",
  "heartRate": 74,
  "bloodGlucose": 115,
  "weight": 70.8,
  "notes": "Follow-up checkup, all readings within normal range",
  "createdAt": "2023-03-20T11:45:30Z",
  "updatedAt": "2023-03-20T11:45:30Z",
  "patientId": "b2c3d4e5-f6a7-8901-bcde-f12345678901"
}
```

**Error Responses**:
- `400 Bad Request`: Invalid input data
- `401 Unauthorized`: Invalid or missing token
- `403 Forbidden`: Insufficient permissions
- `404 Not Found`: Patient not found

### Update Health Record

Update an existing health record.

**URL**: `/api/health-records/:id`

**Method**: `PATCH`

**Headers**:
```
Authorization: Bearer [JWT_TOKEN]
```

**URL Parameters**:
- `id`: ID of the health record

**Request Body**:
```json
{
  "bloodPressure": "128/83",
  "notes": "Follow-up checkup, slight improvement in blood pressure"
}
```

**Response (200 OK)**:
```json
{
  "id": "d4e5f6a7-b8c9-0123-def4-56789abcdef0",
  "bloodPressure": "128/83",
  "notes": "Follow-up checkup, slight improvement in blood pressure",
  "updatedAt": "2023-03-20T12:30:45Z"
}
```

**Error Responses**:
- `400 Bad Request`: Invalid input data
- `401 Unauthorized`: Invalid or missing token
- `403 Forbidden`: Insufficient permissions
- `404 Not Found`: Health record not found

### Delete Health Record

Delete a health record.

**URL**: `/api/health-records/:id`

**Method**: `DELETE`

**Headers**:
```
Authorization: Bearer [JWT_TOKEN]
```

**URL Parameters**:
- `id`: ID of the health record

**Response (200 OK)**:
```json
{
  "message": "Health record successfully deleted"
}
```

**Error Responses**:
- `401 Unauthorized`: Invalid or missing token
- `403 Forbidden`: Insufficient permissions
- `404 Not Found`: Health record not found

### Get Health Records Summary

Get a summary of health records for a patient.

**URL**: `/api/health-records/patient/:patientId/summary`

**Method**: `GET`

**Headers**:
```
Authorization: Bearer [JWT_TOKEN]
```

**URL Parameters**:
- `patientId`: ID of the patient

**Query Parameters**:
- `period`: Time period for summary (week, month, year) (default: month)

**Response (200 OK)**:
```json
{
  "bloodPressure": {
    "latest": "128/83",
    "average": {
      "systolic": 126,
      "diastolic": 82
    },
    "trend": "stable"
  },
  "heartRate": {
    "latest": 74,
    "average": 73.5,
    "min": 70,
    "max": 76,
    "trend": "stable"
  },
  "bloodGlucose": {
    "latest": 115,
    "average": 118.3,
    "min": 110,
    "max": 130,
    "trend": "decreasing"
  },
  "weight": {
    "latest": 70.8,
    "average": 70.5,
    "trend": "stable"
  },
  "period": "month",
  "recordCount": 3,
  "lastUpdated": "2023-03-20T12:30:45Z"
}
```

**Error Responses**:
- `401 Unauthorized`: Invalid or missing token
- `403 Forbidden`: Insufficient permissions
- `404 Not Found`: Patient not found

## Access Control

- Patients can view, create, update, and delete their own health records
- Doctors can view health records for patients assigned to them
- Doctors can create and update health records for patients assigned to them
- Admin users can view, create, update, and delete all health records 