import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePatientDto, UpdatePatientDto, UpdatePatientProfileDto } from './dto/patient.dto';
import { Role } from '../auth/types/role.enum';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PatientsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPatientDto: CreatePatientDto) {
    // Check if user email already exists
    const existingUser = await this.prisma.user.findUnique({
      where: { email: createPatientDto.email },
    });

    if (existingUser) {
      throw new BadRequestException('Email already in use');
    }

    // Hash password
    const hashedPassword = await this.hashPassword(createPatientDto.password);

    // Create user and patient profile in transaction
    return this.prisma.$transaction(async (prisma) => {
      const user = await prisma.user.create({
        data: {
          email: createPatientDto.email,
          password: hashedPassword,
          role: Role.PATIENT,
          profile: {
            create: {
              firstName: createPatientDto.firstName,
              lastName: createPatientDto.lastName,
              phone: createPatientDto.phone,
            },
          },
        },
        include: {
          profile: true,
        },
      });

      // Parse date of birth if provided
      let dateOfBirth: Date | null = null;
      if (createPatientDto.dateOfBirth) {
        dateOfBirth = new Date(createPatientDto.dateOfBirth);
      }

      // Create patient profile
      const patient = await prisma.patient.create({
        data: {
          dateOfBirth,
          gender: createPatientDto.gender,
          emergencyContact: createPatientDto.emergencyContact,
          userId: user.id,
        },
        include: {
          user: {
            include: {
              profile: true,
            },
          },
        },
      });

      // Remove sensitive information
      const { password, ...userWithoutPassword } = patient.user as any;
      patient.user = userWithoutPassword as any;

      return patient;
    });
  }

  async findAll() {
    const patients = await this.prisma.patient.findMany({
      include: {
        user: {
          include: {
            profile: true,
          },
        },
        medicalConditions: true,
      },
    });

    // Remove sensitive information
    return patients.map((patient) => {
      const { password, ...userWithoutPassword } = patient.user as any;
      return {
        ...patient,
        user: userWithoutPassword,
      };
    });
  }

  async findOne(id: number) {
    const patient = await this.prisma.patient.findUnique({
      where: { id },
      include: {
        user: {
          include: {
            profile: true,
          },
        },
        medicalConditions: true,
        healthRecords: {
          orderBy: {
            date: 'desc',
          },
        },
        appointments: {
          include: {
            doctor: {
              include: {
                user: {
                  include: {
                    profile: true,
                  },
                },
                hospital: true,
              },
            },
            hospital: true,
          },
          orderBy: {
            date: 'desc',
          },
        },
        medicationReminders: true,
        dosAndDonts: true,
      },
    });

    if (!patient) {
      throw new NotFoundException(`Patient with ID ${id} not found`);
    }

    // Remove sensitive information
    const { password, ...userWithoutPassword } = patient.user as any;
    return {
      ...patient,
      user: userWithoutPassword,
    };
  }

  async update(id: number, updatePatientDto: UpdatePatientDto) {
    // Check if patient exists
    const patient = await this.prisma.patient.findUnique({
      where: { id },
    });

    if (!patient) {
      throw new NotFoundException(`Patient with ID ${id} not found`);
    }

    // Parse date of birth if provided
    let dateOfBirth: Date | null = null;
    if (updatePatientDto.dateOfBirth) {
      dateOfBirth = new Date(updatePatientDto.dateOfBirth);
    }

    // Update patient
    return this.prisma.patient.update({
      where: { id },
      data: {
        dateOfBirth,
        gender: updatePatientDto.gender,
        emergencyContact: updatePatientDto.emergencyContact,
      },
      include: {
        user: {
          include: {
            profile: true,
          },
        },
      },
    });
  }

  async remove(id: number) {
    // Check if patient exists
    const patient = await this.prisma.patient.findUnique({
      where: { id },
      include: {
        user: true,
      },
    });

    if (!patient) {
      throw new NotFoundException(`Patient with ID ${id} not found`);
    }

    // Delete user (will cascade delete patient profile)
    await this.prisma.user.delete({
      where: { id: patient.user.id },
    });

    return { message: `Patient with ID ${id} deleted successfully` };
  }

  // Create a medical condition for a patient
  async addMedicalCondition(patientId: number, data: { name: string; description?: string; diagnosedAt?: string }) {
    // Check if patient exists
    const patient = await this.prisma.patient.findUnique({
      where: { id: patientId },
    });

    if (!patient) {
      throw new NotFoundException(`Patient with ID ${patientId} not found`);
    }

    // Parse diagnosed date if provided
    let diagnosedAt: Date | null = null;
    if (data.diagnosedAt) {
      diagnosedAt = new Date(data.diagnosedAt);
    }

    // Create medical condition
    return this.prisma.medicalCondition.create({
      data: {
        name: data.name,
        description: data.description,
        diagnosedAt,
        patientId,
      },
    });
  }

  // Get all medical conditions for a patient
  async getMedicalConditions(patientId: number) {
    // Check if patient exists
    const patient = await this.prisma.patient.findUnique({
      where: { id: patientId },
    });

    if (!patient) {
      throw new NotFoundException(`Patient with ID ${patientId} not found`);
    }

    return this.prisma.medicalCondition.findMany({
      where: { patientId },
    });
  }

  async findByUserId(userId: number) {
    // Check if user exists and is a patient
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException(`User not found`);
    }

    if (user.role !== Role.PATIENT) {
      throw new ForbiddenException('User is not a patient');
    }

    // Find patient profile
    const patient = await this.prisma.patient.findUnique({
      where: { userId },
      include: {
        user: {
          include: {
            profile: true,
          },
        },
        medicalConditions: true,
        healthRecords: {
          orderBy: {
            date: 'desc',
          },
        },
        appointments: {
          include: {
            doctor: {
              include: {
                user: {
                  include: {
                    profile: true,
                  },
                },
                hospital: true,
              },
            },
            hospital: true,
          },
          orderBy: {
            date: 'desc',
          },
        },
        medicationReminders: true,
        dosAndDonts: true,
      },
    });

    if (!patient) {
      throw new NotFoundException(`Patient profile not found`);
    }

    // Remove sensitive information
    const { password, ...userWithoutPassword } = patient.user as any;
    return {
      ...patient,
      user: userWithoutPassword,
    };
  }

  async updateProfile(userId: number, updatePatientProfileDto: UpdatePatientProfileDto) {
    // Check if user exists and is a patient
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        profile: true,
      },
    });

    if (!user) {
      throw new NotFoundException(`User not found`);
    }

    if (user.role !== Role.PATIENT) {
      throw new ForbiddenException('User is not a patient');
    }

    // Find patient
    const patient = await this.prisma.patient.findUnique({
      where: { userId },
    });

    if (!patient) {
      throw new NotFoundException(`Patient profile not found`);
    }

    // Parse date of birth if provided
    let dateOfBirth: Date | undefined = undefined;
    if (updatePatientProfileDto.dateOfBirth) {
      dateOfBirth = new Date(updatePatientProfileDto.dateOfBirth);
    }

    // Update profile in transaction
    return this.prisma.$transaction(async (prisma) => {
      // Update user profile
      if (updatePatientProfileDto.firstName || updatePatientProfileDto.lastName || 
          updatePatientProfileDto.phone || updatePatientProfileDto.avatar) {
        await prisma.profile.update({
          where: { userId },
          data: {
            firstName: updatePatientProfileDto.firstName,
            lastName: updatePatientProfileDto.lastName,
            phone: updatePatientProfileDto.phone,
            avatar: updatePatientProfileDto.avatar,
          },
        });
      }

      // Update patient data
      const updatedPatient = await prisma.patient.update({
        where: { userId },
        data: {
          dateOfBirth: dateOfBirth,
          gender: updatePatientProfileDto.gender,
          emergencyContact: updatePatientProfileDto.emergencyContact,
        },
        include: {
          user: {
            include: {
              profile: true,
            },
          },
        },
      });

      // Remove sensitive information
      const { password, ...userWithoutPassword } = updatedPatient.user as any;
      return {
        ...updatedPatient,
        user: userWithoutPassword,
      };
    });
  }

  private async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt);
  }
} 