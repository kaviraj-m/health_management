import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt();
  return bcrypt.hash(password, salt);
}

async function main() {
  console.log('Start seeding database...');

  // Clean database in development
  if (process.env.NODE_ENV !== 'production') {
    console.log('Cleaning database...');
    await prisma.dosAndDonts.deleteMany();
    await prisma.medicationReminder.deleteMany();
    await prisma.healthRecord.deleteMany();
    await prisma.medicalCondition.deleteMany();
    await prisma.message.deleteMany();
    await prisma.appointment.deleteMany();
    await prisma.patient.deleteMany();
    await prisma.doctor.deleteMany();
    await prisma.hospital.deleteMany();
    await prisma.profile.deleteMany();
    await prisma.user.deleteMany();
  }

  // Create admin users
  const adminPassword = await hashPassword('admin123');
  const admin = await prisma.user.create({
    data: {
      email: 'admin@healthcare.com',
      password: adminPassword,
      role: Role.ADMIN,
      profile: {
        create: {
          firstName: 'Rajesh',
          lastName: 'Kumar',
          phone: '+12345678901',
          avatar: 'https://ui-avatars.com/api/?name=Rajesh+Kumar&background=0D8ABC&color=fff',
        },
      },
    },
  });
  console.log('Created admin user:', admin.email);

  // Additional admin user
  const admin2 = await prisma.user.create({
    data: {
      email: 'superadmin@healthcare.com',
      password: adminPassword,
      role: Role.ADMIN,
      profile: {
        create: {
          firstName: 'Suresh',
          lastName: 'Venkat',
          phone: '+12345678902',
          avatar: 'https://ui-avatars.com/api/?name=Suresh+Venkat&background=0D8ABC&color=fff',
        },
      },
    },
  });
  console.log('Created second admin user:', admin2.email);

  // Create hospitals
  const hospital1 = await prisma.hospital.create({
    data: {
      name: 'Chennai General Hospital',
      address: '123 Anna Salai',
      city: 'Chennai',
      state: 'TN',
      zipCode: '600002',
      phone: '+12345678901',
    },
  });

  const hospital2 = await prisma.hospital.create({
    data: {
      name: 'Apollo Medical Center',
      address: '456 Poonamallee High Road',
      city: 'Chennai',
      state: 'TN',
      zipCode: '600056',
      phone: '+12345678902',
    },
  });

  const hospital3 = await prisma.hospital.create({
    data: {
      name: 'Kumaran Multi-Specialty Hospital',
      address: '789 Mount Road',
      city: 'Coimbatore',
      state: 'TN',
      zipCode: '641018',
      phone: '+12345678903',
    },
  });

  const hospital4 = await prisma.hospital.create({
    data: {
      name: 'Aravind Eye Hospital',
      address: '101 Gandhi Nagar',
      city: 'Madurai',
      state: 'TN',
      zipCode: '625020',
      phone: '+12345678904',
    },
  });

  console.log('Created hospitals');

  // Create doctor users
  const doctorPassword = await hashPassword('doctor123');
  
  // Create doctor 1
  const doctor1User = await prisma.user.create({
    data: {
      email: 'doctor1@healthcare.com',
      password: doctorPassword,
      role: Role.DOCTOR,
      profile: {
        create: {
          firstName: 'Karthik',
          lastName: 'Rajan',
          phone: '+12345678903',
          avatar: 'https://ui-avatars.com/api/?name=Karthik+Rajan&background=0D8ABC&color=fff',
        },
      },
    },
  });

  const doctor1 = await prisma.doctor.create({
    data: {
      specialization: 'Cardiology',
      licenseNumber: 'DOC12345',
      hospitalId: hospital1.id,
      userId: doctor1User.id,
    }
  });

  // Create doctor 2
  const doctor2User = await prisma.user.create({
    data: {
      email: 'doctor2@healthcare.com',
      password: doctorPassword,
      role: Role.DOCTOR,
      profile: {
        create: {
          firstName: 'Priya',
          lastName: 'Lakshmi',
          phone: '+12345678904',
          avatar: 'https://ui-avatars.com/api/?name=Priya+Lakshmi&background=0D8ABC&color=fff',
        },
      },
    },
  });

  const doctor2 = await prisma.doctor.create({
    data: {
      specialization: 'Endocrinology',
      licenseNumber: 'DOC12346',
      hospitalId: hospital2.id,
      userId: doctor2User.id,
    }
  });

  // Create doctor 3
  const doctor3User = await prisma.user.create({
    data: {
      email: 'doctor3@healthcare.com',
      password: doctorPassword,
      role: Role.DOCTOR,
      profile: {
        create: {
          firstName: 'Anand',
          lastName: 'Krishnan',
          phone: '+12345678905',
          avatar: 'https://ui-avatars.com/api/?name=Anand+Krishnan&background=0D8ABC&color=fff',
        },
      },
    },
  });

  const doctor3 = await prisma.doctor.create({
    data: {
      specialization: 'Neurology',
      licenseNumber: 'DOC12347',
      hospitalId: hospital3.id,
      userId: doctor3User.id,
    }
  });

  // Create doctor 4
  const doctor4User = await prisma.user.create({
    data: {
      email: 'doctor4@healthcare.com',
      password: doctorPassword,
      role: Role.DOCTOR,
      profile: {
        create: {
          firstName: 'Meena',
          lastName: 'Sundari',
          phone: '+12345678906',
          avatar: 'https://ui-avatars.com/api/?name=Meena+Sundari&background=0D8ABC&color=fff',
        },
      },
    },
  });

  const doctor4 = await prisma.doctor.create({
    data: {
      specialization: 'Pulmonology',
      licenseNumber: 'DOC12348',
      hospitalId: hospital4.id,
      userId: doctor4User.id,
    }
  });

  console.log('Created doctor users');

  // Create patient users
  const patientPassword = await hashPassword('patient123');
  
  // Create patient 1
  const patient1User = await prisma.user.create({
    data: {
      email: 'patient1@example.com',
      password: patientPassword,
      role: Role.PATIENT,
      profile: {
        create: {
          firstName: 'Vijay',
          lastName: 'Murugan',
          phone: '+12345678905',
          avatar: 'https://ui-avatars.com/api/?name=Vijay+Murugan&background=0D8ABC&color=fff',
        },
      },
    },
  });

  const patient1 = await prisma.patient.create({
    data: {
      dateOfBirth: new Date('1980-05-15'),
      gender: 'Male',
      emergencyContact: '+12345678906',
      userId: patient1User.id,
    }
  });

  // Create patient 2
  const patient2User = await prisma.user.create({
    data: {
      email: 'patient2@example.com',
      password: patientPassword,
      role: Role.PATIENT,
      profile: {
        create: {
          firstName: 'Kavitha',
          lastName: 'Krishnamurthy',
          phone: '+12345678907',
          avatar: 'https://ui-avatars.com/api/?name=Kavitha+Krishnamurthy&background=0D8ABC&color=fff',
        },
      },
    },
  });

  const patient2 = await prisma.patient.create({
    data: {
      dateOfBirth: new Date('1992-08-22'),
      gender: 'Female',
      emergencyContact: '+12345678908',
      userId: patient2User.id,
    }
  });

  // Create patient 3
  const patient3User = await prisma.user.create({
    data: {
      email: 'patient3@example.com',
      password: patientPassword,
      role: Role.PATIENT,
      profile: {
        create: {
          firstName: 'Ramesh',
          lastName: 'Subramanian',
          phone: '+12345678909',
          avatar: 'https://ui-avatars.com/api/?name=Ramesh+Subramanian&background=0D8ABC&color=fff',
        },
      },
    },
  });

  const patient3 = await prisma.patient.create({
    data: {
      dateOfBirth: new Date('1975-03-10'),
      gender: 'Male',
      emergencyContact: '+12345678910',
      userId: patient3User.id,
    }
  });

  // Create patient 4
  const patient4User = await prisma.user.create({
    data: {
      email: 'patient4@example.com',
      password: patientPassword,
      role: Role.PATIENT,
      profile: {
        create: {
          firstName: 'Lakshmi',
          lastName: 'Nataraj',
          phone: '+12345678911',
          avatar: 'https://ui-avatars.com/api/?name=Lakshmi+Nataraj&background=0D8ABC&color=fff',
        },
      },
    },
  });

  const patient4 = await prisma.patient.create({
    data: {
      dateOfBirth: new Date('1988-11-28'),
      gender: 'Female',
      emergencyContact: '+12345678912',
      userId: patient4User.id,
    }
  });

  // Create patient 5
  const patient5User = await prisma.user.create({
    data: {
      email: 'patient5@example.com',
      password: patientPassword,
      role: Role.PATIENT,
      profile: {
        create: {
          firstName: 'Arjun',
          lastName: 'Venkatesh',
          phone: '+12345678913',
          avatar: 'https://ui-avatars.com/api/?name=Arjun+Venkatesh&background=0D8ABC&color=fff',
        },
      },
    },
  });

  const patient5 = await prisma.patient.create({
    data: {
      dateOfBirth: new Date('1965-09-05'),
      gender: 'Male',
      emergencyContact: '+12345678914',
      userId: patient5User.id,
    }
  });

  console.log('Created patient users');

  // Create medical conditions for patients
  await prisma.medicalCondition.create({
    data: {
      name: 'Diabetes Type 2',
      description: 'Diagnosed 5 years ago',
      diagnosedAt: new Date('2018-03-10'),
      patientId: patient1.id,
    },
  });

  await prisma.medicalCondition.create({
    data: {
      name: 'Hypertension',
      description: 'Mild hypertension',
      diagnosedAt: new Date('2020-06-18'),
      patientId: patient2.id,
    },
  });

  await prisma.medicalCondition.create({
    data: {
      name: 'Coronary Artery Disease',
      description: 'Requires regular monitoring',
      diagnosedAt: new Date('2019-05-20'),
      patientId: patient3.id,
    },
  });

  await prisma.medicalCondition.create({
    data: {
      name: 'Asthma',
      description: 'Moderate severity',
      diagnosedAt: new Date('2015-08-12'),
      patientId: patient4.id,
    },
  });

  await prisma.medicalCondition.create({
    data: {
      name: 'Osteoarthritis',
      description: 'Affecting knee joints',
      diagnosedAt: new Date('2017-11-05'),
      patientId: patient5.id,
    },
  });

  await prisma.medicalCondition.create({
    data: {
      name: 'High Cholesterol',
      description: 'Managed with medication',
      diagnosedAt: new Date('2021-02-15'),
      patientId: patient1.id,
    },
  });

  console.log('Created medical conditions');

  // Create health records
  await prisma.healthRecord.create({
    data: {
      date: new Date('2023-01-10'),
      bloodPressure: '120/80',
      heartRate: 72,
      bloodGlucose: 110,
      notes: 'Normal readings',
      patientId: patient1.id,
    },
  });

  await prisma.healthRecord.create({
    data: {
      date: new Date('2023-02-15'),
      bloodPressure: '130/85',
      heartRate: 75,
      bloodGlucose: 130,
      notes: 'Slightly elevated glucose',
      patientId: patient1.id,
    },
  });

  await prisma.healthRecord.create({
    data: {
      date: new Date('2023-01-05'),
      bloodPressure: '140/90',
      heartRate: 78,
      notes: 'Blood pressure elevated',
      patientId: patient2.id,
    },
  });

  await prisma.healthRecord.create({
    data: {
      date: new Date('2023-01-15'),
      bloodPressure: '135/85',
      heartRate: 80,
      notes: 'Regular checkup',
      patientId: patient3.id,
    },
  });

  await prisma.healthRecord.create({
    data: {
      date: new Date('2023-01-25'),
      bloodPressure: '125/80',
      heartRate: 72,
      notes: 'After new medication',
      patientId: patient4.id,
    },
  });

  await prisma.healthRecord.create({
    data: {
      date: new Date('2023-02-05'),
      bloodPressure: '130/82',
      heartRate: 74,
      notes: 'Joint pain subsiding',
      patientId: patient5.id,
    },
  });

  console.log('Created health records');

  // Create medication reminders
  await prisma.medicationReminder.create({
    data: {
      medication: 'Metformin',
      dosage: '500mg',
      frequency: 'Twice daily',
      startDate: new Date('2023-01-01'),
      time: [
        new Date('2023-01-01T08:00:00Z'),
        new Date('2023-01-01T20:00:00Z'),
      ],
      patientId: patient1.id,
    },
  });

  await prisma.medicationReminder.create({
    data: {
      medication: 'Lisinopril',
      dosage: '10mg',
      frequency: 'Once daily',
      startDate: new Date('2023-01-01'),
      time: [new Date('2023-01-01T08:00:00Z')],
      patientId: patient2.id,
    },
  });

  await prisma.medicationReminder.create({
    data: {
      medication: 'Atorvastatin',
      dosage: '20mg',
      frequency: 'Once daily',
      startDate: new Date('2023-01-01'),
      time: [new Date('2023-01-01T20:00:00Z')],
      patientId: patient1.id,
    },
  });

  await prisma.medicationReminder.create({
    data: {
      medication: 'Aspirin',
      dosage: '81mg',
      frequency: 'Once daily',
      startDate: new Date('2023-01-01'),
      time: [new Date('2023-01-01T08:00:00Z')],
      patientId: patient3.id,
    },
  });

  await prisma.medicationReminder.create({
    data: {
      medication: 'Albuterol',
      dosage: '2 puffs',
      frequency: 'As needed',
      startDate: new Date('2023-01-01'),
      time: [
        new Date('2023-01-01T08:00:00Z'),
        new Date('2023-01-01T20:00:00Z'),
      ],
      patientId: patient4.id,
    },
  });

  await prisma.medicationReminder.create({
    data: {
      medication: 'Acetaminophen',
      dosage: '500mg',
      frequency: 'As needed for pain',
      startDate: new Date('2023-01-01'),
      time: [
        new Date('2023-01-01T08:00:00Z'),
        new Date('2023-01-01T14:00:00Z'),
        new Date('2023-01-01T20:00:00Z'),
      ],
      patientId: patient5.id,
    },
  });

  console.log('Created medication reminders');

  // Create appointments
  await prisma.appointment.create({
    data: {
      date: new Date('2023-03-15T10:00:00Z'),
      preferredTime: '10:00 AM',
      location: 'Room 101',
      type: 'IN_PERSON',
      reason: 'Routine checkup',
      status: 'CONFIRMED',
      patientId: patient1.id,
      doctorId: doctor1.id,
      hospitalId: hospital1.id,
    },
  });

  await prisma.appointment.create({
    data: {
      date: new Date('2023-03-20T14:00:00Z'),
      preferredTime: '2:00 PM',
      type: 'VIRTUAL',
      reason: 'Follow-up consultation',
      status: 'PENDING',
      patientId: patient2.id,
      doctorId: doctor2.id,
      hospitalId: hospital2.id,
    },
  });

  // Add more appointments with different statuses
  await prisma.appointment.create({
    data: {
      date: new Date('2023-03-18T11:30:00Z'),
      preferredTime: '11:30 AM',
      location: 'Room 202',
      type: 'IN_PERSON',
      reason: 'Blood pressure check',
      status: 'COMPLETED',
      patientId: patient2.id,
      doctorId: doctor1.id,
      hospitalId: hospital1.id,
    },
  });

  await prisma.appointment.create({
    data: {
      date: new Date('2023-03-25T15:00:00Z'),
      preferredTime: '3:00 PM',
      type: 'VIRTUAL',
      reason: 'Medication review',
      status: 'CONFIRMED',
      patientId: patient3.id,
      doctorId: doctor3.id,
      hospitalId: hospital3.id,
    },
  });

  await prisma.appointment.create({
    data: {
      date: new Date('2023-03-22T10:30:00Z'),
      preferredTime: '10:30 AM',
      location: 'Room 105',
      type: 'IN_PERSON',
      reason: 'Asthma follow-up',
      status: 'CONFIRMED',
      patientId: patient4.id,
      doctorId: doctor4.id,
      hospitalId: hospital4.id,
    },
  });

  await prisma.appointment.create({
    data: {
      date: new Date('2023-03-05T09:00:00Z'),
      preferredTime: '9:00 AM',
      location: 'Room 110',
      type: 'IN_PERSON',
      reason: 'Joint pain assessment',
      status: 'COMPLETED',
      patientId: patient5.id,
      doctorId: doctor1.id,
      hospitalId: hospital1.id,
    },
  });

  await prisma.appointment.create({
    data: {
      date: new Date('2023-03-30T13:15:00Z'),
      preferredTime: '1:15 PM',
      type: 'VIRTUAL',
      reason: 'Diabetes check',
      status: 'CANCELLED',
      patientId: patient1.id,
      doctorId: doctor2.id,
      hospitalId: hospital2.id,
    },
  });

  await prisma.appointment.create({
    data: {
      date: new Date('2023-04-05T16:00:00Z'),
      preferredTime: '4:00 PM',
      location: 'Room 215',
      type: 'IN_PERSON',
      reason: 'Annual physical',
      status: 'CONFIRMED',
      patientId: patient3.id,
      doctorId: doctor1.id,
      hospitalId: hospital1.id,
    },
  });

  await prisma.appointment.create({
    data: {
      date: new Date('2023-04-10T11:00:00Z'),
      preferredTime: '11:00 AM',
      type: 'VIRTUAL',
      reason: 'Review test results',
      status: 'PENDING',
      patientId: patient4.id,
      doctorId: doctor3.id,
      hospitalId: hospital3.id,
    },
  });

  console.log('Created appointments');

  // Create dos and don'ts
  await prisma.dosAndDonts.create({
    data: {
      type: 'DO',
      description: 'Regular exercise at least 30 minutes daily',
      isAutoGenerated: true,
      patientId: patient1.id,
    },
  });

  await prisma.dosAndDonts.create({
    data: {
      type: 'DONT',
      description: 'Avoid sugary foods and beverages',
      isAutoGenerated: true,
      patientId: patient1.id,
    },
  });

  await prisma.dosAndDonts.create({
    data: {
      type: 'DO',
      description: 'Reduce sodium intake',
      isAutoGenerated: true,
      patientId: patient2.id,
    },
  });

  await prisma.dosAndDonts.create({
    data: {
      type: 'DONT',
      description: 'Avoid excessive alcohol consumption',
      isAutoGenerated: true,
      patientId: patient2.id,
    },
  });

  await prisma.dosAndDonts.create({
    data: {
      type: 'DO',
      description: 'Take prescribed medication regularly',
      isAutoGenerated: false,
      patientId: patient3.id,
    },
  });

  await prisma.dosAndDonts.create({
    data: {
      type: 'DONT',
      description: 'Avoid smoking or exposure to secondhand smoke',
      isAutoGenerated: false,
      patientId: patient3.id,
    },
  });

  await prisma.dosAndDonts.create({
    data: {
      type: 'DO',
      description: 'Keep rescue inhaler with you at all times',
      isAutoGenerated: true,
      patientId: patient4.id,
    },
  });

  await prisma.dosAndDonts.create({
    data: {
      type: 'DONT',
      description: 'Avoid known asthma triggers like dust and pollen',
      isAutoGenerated: true,
      patientId: patient4.id,
    },
  });

  await prisma.dosAndDonts.create({
    data: {
      type: 'DO',
      description: 'Perform recommended joint exercises daily',
      isAutoGenerated: false,
      patientId: patient5.id,
    },
  });

  await prisma.dosAndDonts.create({
    data: {
      type: 'DONT',
      description: 'Avoid high-impact activities that strain your joints',
      isAutoGenerated: false,
      patientId: patient5.id,
    },
  });

  console.log('Created dos and don\'ts');

  // Create messages between users
  await prisma.message.create({
    data: {
      content: 'Hello doctor, I have some questions about my medication.',
      isRead: true,
      senderId: patient1User.id,
      receiverId: doctor1User.id,
    },
  });

  await prisma.message.create({
    data: {
      content:
        'Hello! I would be happy to answer your questions. What would you like to know?',
      isRead: true,
      senderId: doctor1User.id,
      receiverId: patient1User.id,
    },
  });

  await prisma.message.create({
    data: {
      content: 'I\'m experiencing some side effects with the new medication. Is that normal?',
      isRead: true,
      senderId: patient1User.id,
      receiverId: doctor1User.id,
    },
  });

  await prisma.message.create({
    data: {
      content: 'What kind of side effects are you experiencing? Some mild side effects can be normal in the first week.',
      isRead: true,
      senderId: doctor1User.id,
      receiverId: patient1User.id,
    },
  });

  await prisma.message.create({
    data: {
      content: 'I\'ve been feeling a bit dizzy in the mornings after taking it.',
      isRead: false,
      senderId: patient1User.id,
      receiverId: doctor1User.id,
    },
  });

  // Another conversation
  await prisma.message.create({
    data: {
      content: 'Dr. Priya, I need to reschedule my upcoming appointment.',
      isRead: false,
      senderId: patient2User.id,
      receiverId: doctor2User.id,
    },
  });

  // Conversation between patient3 and doctor3
  await prisma.message.create({
    data: {
      content: 'Good morning Dr. Anand, I wanted to check if my test results are back?',
      isRead: true,
      senderId: patient3User.id,
      receiverId: doctor3User.id,
    },
  });

  await prisma.message.create({
    data: {
      content: 'Hello Mr. Ramesh, your test results just came in this morning. Everything looks normal, which is good news.',
      isRead: true,
      senderId: doctor3User.id,
      receiverId: patient3User.id,
    },
  });

  await prisma.message.create({
    data: {
      content: 'That\'s a relief! Should I continue with the same medication dosage?',
      isRead: true,
      senderId: patient3User.id,
      receiverId: doctor3User.id,
    },
  });

  await prisma.message.create({
    data: {
      content: 'Yes, please continue with the current dosage. We\'ll reassess at your next appointment in two weeks.',
      isRead: false,
      senderId: doctor3User.id,
      receiverId: patient3User.id,
    },
  });

  // Conversation between patient4 and doctor4
  await prisma.message.create({
    data: {
      content: 'Dr. Meena, I\'ve been using the new inhaler but haven\'t noticed much improvement.',
      isRead: true,
      senderId: patient4User.id,
      receiverId: doctor4User.id,
    },
  });

  await prisma.message.create({
    data: {
      content: 'Ms. Lakshmi, it may take a week or two to see the full benefits. Are you using it correctly with the spacer?',
      isRead: true,
      senderId: doctor4User.id,
      receiverId: patient4User.id,
    },
  });

  await prisma.message.create({
    data: {
      content: 'I\'m not sure if I\'m using the spacer correctly. Could you provide instructions again?',
      isRead: false,
      senderId: patient4User.id,
      receiverId: doctor4User.id,
    },
  });

  console.log('Created messages');

  console.log('Seeding completed');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 