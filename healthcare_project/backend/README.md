# Healthcare Monitoring System Backend

A NestJS-based backend for a healthcare monitoring system focused on chronic diseases like diabetes and hypertension.

## Technologies Used

- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **PostgreSQL**: A powerful, open-source object-relational database system.
- **Prisma**: Next-generation ORM for Node.js and TypeScript.
- **Socket.IO**: Real-time communication for features like chat, voice calls, and video calls.
- **WebRTC**: Peer-to-peer communication protocol for voice and video calls.
- **JWT Authentication**: Secure authentication with JSON Web Tokens.
- **Swagger**: API documentation.

## Features

- **Role-based access control**: Admin, Doctor, and Patient roles with different permissions
- **Authentication**: JWT-based secure authentication
- **Real-time messaging**: Chat between doctors and patients
- **Voice and video calls**: WebRTC-based real-time communication with signaling through Socket.IO
- **Health record management**: Track blood pressure, heart rate, glucose levels
- **Appointment booking**: Create, confirm, reschedule appointments
- **Medication reminders**: Set and manage medication schedules
- **Dos and Don'ts**: Health advice for patients with specific conditions
- **User profiles**: Manage user information

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- PostgreSQL database

### Installation

1. Clone the repository
2. Navigate to the backend directory
3. Install dependencies

```bash
npm install
```

4. Set up environment variables by creating a `.env` file:

```
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
JWT_SECRET="your-secret-key"
JWT_EXPIRATION="1d"
```

5. Run Prisma migrations to set up your database schema:

```bash
npx prisma migrate dev
```

6. Seed the database with initial data:

```bash
npm run db:seed
```

7. Start the development server:

```bash
npm run start:dev
```

## API Documentation

When the application is running, you can access the Swagger API documentation at:

```
http://localhost:3000/api/docs
```

## Default Users

After seeding the database, you can log in with these default users:

### Admin Users
- **Admin**: admin@healthcare.com / admin123 (Rajesh Kumar)
- **Super Admin**: superadmin@healthcare.com / admin123 (Suresh Venkat)

### Doctor Users
- **Doctor 1**: doctor1@healthcare.com / doctor123 (Karthik Rajan, Cardiology, Chennai General Hospital)
- **Doctor 2**: doctor2@healthcare.com / doctor123 (Priya Lakshmi, Endocrinology, Apollo Medical Center)
- **Doctor 3**: doctor3@healthcare.com / doctor123 (Anand Krishnan, Neurology, Kumaran Multi-Specialty Hospital)
- **Doctor 4**: doctor4@healthcare.com / doctor123 (Meena Sundari, Pulmonology, Aravind Eye Hospital)

### Patient Users
- **Patient 1**: patient1@example.com / patient123 (Vijay Murugan)
- **Patient 2**: patient2@example.com / patient123 (Kavitha Krishnamurthy)
- **Patient 3**: patient3@example.com / patient123 (Ramesh Subramanian)
- **Patient 4**: patient4@example.com / patient123 (Lakshmi Nataraj)
- **Patient 5**: patient5@example.com / patient123 (Arjun Venkatesh)

For complete details on all seeded entities, please refer to the `credentials.md` file.

## Voice and Video Call Implementation

The system implements WebRTC-based voice and video calls with the following components:

- **Socket.IO Gateway**: Handles signaling for WebRTC connection establishment
- **Room-based Communication**: Uses unique room IDs for each call session
- **Call Lifecycle**: Methods for initiating, answering, and ending calls
- **ICE Candidates Exchange**: Manages NAT traversal for peer connections

Key WebSocket events:
- `join_video_call`: Initiates a call and notifies the recipient
- `answer_call`: Accepts an incoming call
- `end_call`: Terminates an active call
- `ice_candidate`: Exchanges ICE candidates between peers
- `handleOffer/handleAnswer`: Exchanges SDP for media negotiation

## Database Schema

The database includes models for:

- Users (with different roles)
- Profiles
- Doctors
- Patients
- Hospitals
- Appointments
- Health Records
- Medical Conditions
- Medication Reminders
- Messages
- Dos and Don'ts

## Scripts

- `npm run start:dev`: Start the development server
- `npm run build`: Build the application
- `npm run start:prod`: Run the built application
- `npx prisma generate`: Generate Prisma client
- `npx prisma migrate dev`: Run database migrations
- `npx prisma studio`: Open Prisma Studio to view/edit data
- `npm run db:seed`: Seed the database with initial data
