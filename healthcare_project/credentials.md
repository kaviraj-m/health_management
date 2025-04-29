# Healthcare Application Credentials

This document contains login credentials for the seeded users in the application.

## User Accounts

### Admin Users
| Field    | Value                     |
|----------|---------------------------|
| Email    | admin@healthcare.com      |
| Password | admin123                  |
| Role     | ADMIN                     |
| Name     | Rajesh Kumar              |

| Field    | Value                     |
|----------|---------------------------|
| Email    | superadmin@healthcare.com |
| Password | admin123                  |
| Role     | ADMIN                     |
| Name     | Suresh Venkat             |

### Doctor Users

#### Doctor 1
| Field         | Value                  |
|---------------|------------------------|
| Email         | doctor1@healthcare.com |
| Password      | doctor123              |
| Role          | DOCTOR                 |
| Name          | Karthik Rajan          |
| Specialization| Cardiology             |
| License       | DOC12345               |
| Hospital      | Chennai General Hospital |

#### Doctor 2
| Field         | Value                  |
|---------------|------------------------|
| Email         | doctor2@healthcare.com |
| Password      | doctor123              |
| Role          | DOCTOR                 |
| Name          | Priya Lakshmi          |
| Specialization| Endocrinology          |
| License       | DOC12346               |
| Hospital      | Apollo Medical Center  |

#### Doctor 3
| Field         | Value                  |
|---------------|------------------------|
| Email         | doctor3@healthcare.com |
| Password      | doctor123              |
| Role          | DOCTOR                 |
| Name          | Anand Krishnan         |
| Specialization| Neurology              |
| License       | DOC12347               |
| Hospital      | Kumaran Multi-Specialty Hospital |

#### Doctor 4
| Field         | Value                  |
|---------------|------------------------|
| Email         | doctor4@healthcare.com |
| Password      | doctor123              |
| Role          | DOCTOR                 |
| Name          | Meena Sundari          |
| Specialization| Pulmonology            |
| License       | DOC12348               |
| Hospital      | Aravind Eye Hospital   |

### Patient Users

#### Patient 1
| Field           | Value                |
|-----------------|----------------------|
| Email           | patient1@example.com |
| Password        | patient123           |
| Role            | PATIENT              |
| Name            | Vijay Murugan        |
| Gender          | Male                 |
| Date of Birth   | 1980-05-15           |
| Medical Condition| Diabetes Type 2, High Cholesterol |

#### Patient 2
| Field           | Value                |
|-----------------|----------------------|
| Email           | patient2@example.com |
| Password        | patient123           |
| Role            | PATIENT              |
| Name            | Kavitha Krishnamurthy |
| Gender          | Female               |
| Date of Birth   | 1992-08-22           |
| Medical Condition| Hypertension        |

#### Patient 3
| Field           | Value                |
|-----------------|----------------------|
| Email           | patient3@example.com |
| Password        | patient123           |
| Role            | PATIENT              |
| Name            | Ramesh Subramanian   |
| Gender          | Male                 |
| Date of Birth   | 1975-03-10           |
| Medical Condition| Coronary Artery Disease |

#### Patient 4
| Field           | Value                |
|-----------------|----------------------|
| Email           | patient4@example.com |
| Password        | patient123           |
| Role            | PATIENT              |
| Name            | Lakshmi Nataraj      |
| Gender          | Female               |
| Date of Birth   | 1988-11-28           |
| Medical Condition| Asthma              |

#### Patient 5
| Field           | Value                |
|-----------------|----------------------|
| Email           | patient5@example.com |
| Password        | patient123           |
| Role            | PATIENT              |
| Name            | Arjun Venkatesh      |
| Gender          | Male                 |
| Date of Birth   | 1965-09-05           |
| Medical Condition| Osteoarthritis      |

## Seeded Entities

### Hospitals
1. **Chennai General Hospital**
   - Address: 123 Anna Salai, Chennai, TN 600002
   - Phone: +12345678901

2. **Apollo Medical Center**
   - Address: 456 Poonamallee High Road, Chennai, TN 600056
   - Phone: +12345678902

3. **Kumaran Multi-Specialty Hospital**
   - Address: 789 Mount Road, Coimbatore, TN 641018
   - Phone: +12345678903

4. **Aravind Eye Hospital**
   - Address: 101 Gandhi Nagar, Madurai, TN 625020
   - Phone: +12345678904

### Appointments
1. Patient: Vijay Murugan, Doctor: Karthik Rajan
   - Date: 2023-03-15, 10:00 AM
   - Type: IN_PERSON
   - Status: CONFIRMED
   - Location: Room 101
   - Reason: Routine checkup

2. Patient: Kavitha Krishnamurthy, Doctor: Priya Lakshmi
   - Date: 2023-03-20, 2:00 PM
   - Type: VIRTUAL
   - Status: PENDING
   - Reason: Follow-up consultation

3. Patient: Kavitha Krishnamurthy, Doctor: Karthik Rajan
   - Date: 2023-03-18, 11:30 AM
   - Type: IN_PERSON
   - Status: COMPLETED
   - Location: Room 202
   - Reason: Blood pressure check

4. Patient: Ramesh Subramanian, Doctor: Anand Krishnan
   - Date: 2023-03-25, 3:00 PM
   - Type: VIRTUAL
   - Status: CONFIRMED
   - Reason: Medication review

5. Patient: Lakshmi Nataraj, Doctor: Meena Sundari
   - Date: 2023-03-22, 10:30 AM
   - Type: IN_PERSON
   - Status: CONFIRMED
   - Location: Room 105
   - Reason: Asthma follow-up

### Health Records
- Vijay Murugan: Blood pressure readings, glucose levels (multiple records)
- Kavitha Krishnamurthy: Blood pressure monitoring (multiple records)
- Ramesh Subramanian: Regular checkup records
- Lakshmi Nataraj: Asthma monitoring
- Arjun Venkatesh: Joint pain assessment

### Medication Reminders
- Vijay Murugan: Metformin (500mg, twice daily), Atorvastatin (20mg, once daily)
- Kavitha Krishnamurthy: Lisinopril (10mg, once daily)
- Ramesh Subramanian: Aspirin (81mg, once daily)
- Lakshmi Nataraj: Albuterol (2 puffs, as needed)
- Arjun Venkatesh: Acetaminophen (500mg, as needed for pain)

### Messages
- Conversation between Vijay Murugan and Dr. Karthik Rajan about medication side effects
- Message from Kavitha Krishnamurthy to Dr. Priya Lakshmi about rescheduling appointment
- Conversation between Ramesh Subramanian and Dr. Anand Krishnan about test results
- Conversation between Lakshmi Nataraj and Dr. Meena Sundari about using an inhaler properly

## API Endpoints for Testing

### Authentication
- Login: `POST /api/auth/login`
- Register: `POST /api/auth/register`
- Get current user: `GET /api/auth/me`

### Admin
- Get all users: `GET /api/admin/users`
- Get user by ID: `GET /api/admin/users/:id`
- Update user: `PUT /api/admin/users/:id`
- Update user profile: `PATCH /api/admin/users/:id/profile`
- Disable user: `PATCH /api/admin/users/:id/disable`
- Enable user: `PATCH /api/admin/users/:id/enable`
- Reset password: `POST /api/admin/users/:id/reset-password`
- Get user statistics: `GET /api/admin/stats/users`

### Appointments
- Create appointment: `POST /api/appointments/patient/:patientId`
- Get patient appointments: `GET /api/appointments/patient/:patientId`
- Get doctor appointments: `GET /api/appointments/doctor/:doctorId`
- Get appointment by ID: `GET /api/appointments/:id`
- Update appointment: `PATCH /api/appointments/:id`
- Delete appointment: `DELETE /api/appointments/:id`

### Hospitals & Doctors
- Get all hospitals: `GET /api/hospitals`
- Get all doctors: `GET /api/doctors`
- Get doctor by ID: `GET /api/doctors/:id`

### Health Records
- Get patient health records: `GET /api/health-records/patient/:patientId`
- Create health record: `POST /api/health-records/patient/:patientId`

### Medication Reminders
- Get patient medication reminders: `GET /api/medication-reminders/patient/:patientId`
- Create medication reminder: `POST /api/medication-reminders/patient/:patientId`

### Dos and Don'ts
- Get patient dos and don'ts: `GET /api/dos-and-donts/patient/:patientId`
- Create dos and don'ts: `POST /api/dos-and-donts/patient/:patientId`

### Messages
- Get conversations: `GET /api/messages/conversations`
- Get conversation with user: `GET /api/messages/conversation/:userId`
- Send message: `POST /api/messages`
- Mark message as read: `PATCH /api/messages/:id/read`

## Access URLs
- API Base URL: http://localhost:3000/api
- API Documentation: http://localhost:3000/api/docs
- Database URL: postgresql://postgres:root@localhost:5432/medi 