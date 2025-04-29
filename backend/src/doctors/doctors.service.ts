import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDoctorDto, UpdateDoctorDto } from './dto/doctor.dto';
import { Role } from '../auth/types/role.enum';
import * as bcrypt from 'bcrypt';

@Injectable()
export class DoctorsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createDoctorDto: CreateDoctorDto) {
    // Check if hospital exists
    const hospital = await this.prisma.hospital.findUnique({
      where: { id: createDoctorDto.hospitalId },
    });

    if (!hospital) {
      throw new NotFoundException(
        `Hospital with ID ${createDoctorDto.hospitalId} not found`,
      );
    }

    // Check if user email already exists
    const existingUser = await this.prisma.user.findUnique({
      where: { email: createDoctorDto.email },
    });

    if (existingUser) {
      throw new BadRequestException('Email already in use');
    }

    // Check if license number already exists
    const existingDoctor = await this.prisma.doctor.findUnique({
      where: { licenseNumber: createDoctorDto.licenseNumber },
    });

    if (existingDoctor) {
      throw new BadRequestException('License number already in use');
    }

    // Hash password
    const hashedPassword = await this.hashPassword(createDoctorDto.password);

    // Create user and doctor profile in transaction
    return this.prisma.$transaction(async (prisma) => {
      const user = await prisma.user.create({
        data: {
          email: createDoctorDto.email,
          password: hashedPassword,
          role: Role.DOCTOR,
          profile: {
            create: {
              firstName: createDoctorDto.firstName,
              lastName: createDoctorDto.lastName,
              phone: createDoctorDto.phone,
            },
          },
        },
        include: {
          profile: true,
        },
      });

      // Create doctor profile
      const doctor = await prisma.doctor.create({
        data: {
          specialization: createDoctorDto.specialization,
          licenseNumber: createDoctorDto.licenseNumber,
          hospitalId: createDoctorDto.hospitalId,
          userId: user.id,
        },
        include: {
          hospital: true,
          user: {
            include: {
              profile: true,
            },
          },
        },
      });

      // Remove sensitive information
      const { password, ...userWithoutPassword } = doctor.user;
      doctor.user = userWithoutPassword as any;

      return doctor;
    });
  }

  async findAll() {
    const doctors = await this.prisma.doctor.findMany({
      include: {
        hospital: true,
        user: {
          include: {
            profile: true,
          },
        },
      },
    });

    // Remove sensitive information
    return doctors.map((doctor) => {
      const { password, ...userWithoutPassword } = doctor.user;
      return {
        ...doctor,
        user: userWithoutPassword,
      };
    });
  }

  async findOne(id: number) {
    const doctor = await this.prisma.doctor.findUnique({
      where: { id },
      include: {
        hospital: true,
        user: {
          include: {
            profile: true,
          },
        },
        appointments: {
          include: {
            patient: {
              include: {
                user: {
                  include: {
                    profile: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!doctor) {
      throw new NotFoundException(`Doctor with ID ${id} not found`);
    }

    // Remove sensitive information
    const { password, ...userWithoutPassword } = doctor.user;
    return {
      ...doctor,
      user: userWithoutPassword,
    };
  }

  async update(id: number, updateDoctorDto: UpdateDoctorDto) {
    // Check if doctor exists
    const doctor = await this.prisma.doctor.findUnique({
      where: { id },
    });

    if (!doctor) {
      throw new NotFoundException(`Doctor with ID ${id} not found`);
    }

    // If changing hospital, check if it exists
    if (updateDoctorDto.hospitalId) {
      const hospital = await this.prisma.hospital.findUnique({
        where: { id: updateDoctorDto.hospitalId },
      });

      if (!hospital) {
        throw new NotFoundException(
          `Hospital with ID ${updateDoctorDto.hospitalId} not found`,
        );
      }
    }

    // Update doctor
    return this.prisma.doctor.update({
      where: { id },
      data: updateDoctorDto,
      include: {
        hospital: true,
        user: {
          include: {
            profile: true,
          },
        },
      },
    });
  }

  async remove(id: number) {
    // Check if doctor exists
    const doctor = await this.prisma.doctor.findUnique({
      where: { id },
      include: {
        user: true,
      },
    });

    if (!doctor) {
      throw new NotFoundException(`Doctor with ID ${id} not found`);
    }

    // Delete user (will cascade delete doctor profile)
    await this.prisma.user.delete({
      where: { id: doctor.user.id },
    });

    return { message: `Doctor with ID ${id} deleted successfully` };
  }

  private async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt);
  }
} 