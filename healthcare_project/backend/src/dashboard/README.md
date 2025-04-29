# Dashboard API Documentation

This module provides endpoints for retrieving dashboard data for different user roles (patients, doctors, and admins).

## Endpoints

### 1. Get Health Analytics for Current Patient

**URL:** `/api/dashboard/my/health-analytics`

**Method:** `GET`

**Auth Required:** Yes (JWT token with PATIENT role)

**Headers:**
- Authorization: Bearer {token}

**Query Parameters:**
- `timeRange` (optional): The time range for data analysis. One of: `daily`, `weekly`, `monthly`, `yearly`. Default: `weekly`.
- `metricType` (optional): The type of health metric to retrieve. One of: `all`, `blood_pressure`, `heart_rate`, `blood_glucose`. Default: `all`.
- `startDate` (optional): Start date in ISO format (e.g., "2023-01-01").
- `endDate` (optional): End date in ISO format (e.g., "2023-01-31").

**Response Format:**
```json
{
  "series": [
    {
      "metric": "Blood Pressure",
      "data": [
        { "date": "2023-04-01T00:00:00.000Z", "value": "120/80" },
        { "date": "2023-04-02T00:00:00.000Z", "value": "118/79" }
        // Additional data points...
      ]
    },
    {
      "metric": "Heart Rate",
      "data": [
        { "date": "2023-04-01T00:00:00.000Z", "value": 75 },
        { "date": "2023-04-02T00:00:00.000Z", "value": 72 }
        // Additional data points...
      ],
      "average": 73.5,
      "min": 72,
      "max": 75,
      "trend": "stable"
    }
    // Additional metrics based on metricType...
  ],
  "timeRange": "weekly",
  "startDate": "2023-04-01T00:00:00.000Z",
  "endDate": "2023-04-07T00:00:00.000Z"
}
```

**Error Responses:**
- 401 Unauthorized: Invalid or missing token
- 403 Forbidden: User is not a patient
- 404 Not Found: Patient profile not found for this user

### 2. Get Appointment Analytics for Current Patient

**URL:** `/api/dashboard/my/appointment-analytics`

**Method:** `GET`

**Auth Required:** Yes (JWT token with PATIENT role)

**Headers:**
- Authorization: Bearer {token}

**Response Format:**
```json
{
  "total": 10,
  "byStatus": [
    { "status": "CONFIRMED", "count": 3 },
    { "status": "COMPLETED", "count": 5 },
    { "status": "CANCELLED", "count": 1 },
    { "status": "PENDING", "count": 1 }
  ],
  "upcoming": 4,
  "byMonth": [
    { "month": "January", "count": 1 },
    { "month": "February", "count": 2 },
    // All months of the current year...
    { "month": "December", "count": 0 }
  ]
}
```

**Error Responses:**
- 401 Unauthorized: Invalid or missing token
- 403 Forbidden: User is not a patient
- 404 Not Found: Patient profile not found for this user

### 3. Get Medication Adherence Analytics for Current Patient

**URL:** `/api/dashboard/my/medication-adherence`

**Method:** `GET`

**Auth Required:** Yes (JWT token with PATIENT role)

**Headers:**
- Authorization: Bearer {token}

**Response Format:**
```json
{
  "medications": [
    {
      "medication": "Lisinopril",
      "adherenceRate": 85,
      "dosage": "10mg",
      "timesPerDay": 1,
      "startDate": "2023-01-15T00:00:00.000Z",
      "endDate": "2023-07-15T00:00:00.000Z"
    },
    // Additional medications...
  ],
  "overallAdherence": 83
}
```

**Error Responses:**
- 401 Unauthorized: Invalid or missing token
- 403 Forbidden: User is not a patient
- 404 Not Found: Patient profile not found for this user

### 4. Get Health Analytics for Specific Patient

**URL:** `/api/dashboard/patients/:patientId/health-analytics`

**Method:** `GET`

**Auth Required:** Yes (JWT token with PATIENT, DOCTOR, or ADMIN role)

**Headers:**
- Authorization: Bearer {token}

**URL Parameters:**
- `patientId`: ID of the patient to retrieve data for

**Query Parameters:**
- Same as the "Get Health Analytics for Current Patient" endpoint

**Response Format:**
- Same as the "Get Health Analytics for Current Patient" endpoint

**Error Responses:**
- 401 Unauthorized: Invalid or missing token
- 403 Forbidden: User does not have permission to access this patient's data
- 404 Not Found: Patient not found

### 5. Get Appointment Analytics for Specific Patient

**URL:** `/api/dashboard/patients/:patientId/appointment-analytics`

**Method:** `GET`

**Auth Required:** Yes (JWT token with PATIENT, DOCTOR, or ADMIN role)

**Headers:**
- Authorization: Bearer {token}

**URL Parameters:**
- `patientId`: ID of the patient to retrieve data for

**Response Format:**
- Same as the "Get Appointment Analytics for Current Patient" endpoint

**Error Responses:**
- 401 Unauthorized: Invalid or missing token
- 403 Forbidden: User does not have permission to access this patient's data
- 404 Not Found: Patient not found

### 6. Get Medication Adherence Analytics for Specific Patient

**URL:** `/api/dashboard/patients/:patientId/medication-adherence`

**Method:** `GET`

**Auth Required:** Yes (JWT token with PATIENT, DOCTOR, or ADMIN role)

**Headers:**
- Authorization: Bearer {token}

**URL Parameters:**
- `patientId`: ID of the patient to retrieve data for

**Response Format:**
- Same as the "Get Medication Adherence Analytics for Current Patient" endpoint

**Error Responses:**
- 401 Unauthorized: Invalid or missing token
- 403 Forbidden: User does not have permission to access this patient's data
- 404 Not Found: Patient not found

## Data Types

### Health Metrics

The dashboard provides analytics for the following health metrics:

- **Blood Pressure**: Represented as a string in the format "systolic/diastolic" (e.g., "120/80").
- **Heart Rate**: Represented as a number in beats per minute (BPM).
- **Blood Glucose**: Represented as a number in mg/dL.

### Time Ranges

Data can be filtered by the following time ranges:

- **daily**: Data from the last 24 hours
- **weekly**: Data from the last 7 days (default)
- **monthly**: Data from the last 30 days
- **yearly**: Data from the last 365 days

You can also provide custom date ranges using the `startDate` and `endDate` parameters.

## Access Control

- Patient users can only access their own dashboard and health analytics data
- Doctor users can access their own dashboard and health analytics data for their patients
- Admin users can access the admin dashboard and aggregate statistics
- Only authenticated users can access dashboard endpoints 