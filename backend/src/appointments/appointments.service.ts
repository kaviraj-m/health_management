import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AppointmentStatus, CreateAppointmentDto, UpdateAppointmentDto } from './dto/appointment.dto';

@Injectable()
export class AppointmentsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(patientId: number, createAppointmentDto: CreateAppointmentDto) {
    // Check if patient exists
    const patient = await this.prisma.patient.findUnique({
      where: { id: patientId },
    });

    if (!patient) {
      throw new NotFoundException(`Patient with ID ${patientId} not found`);
    }

    // Check if doctor exists
    const doctor = await this.prisma.doctor.findUnique({
      where: { id: createAppointmentDto.doctorId },
    });

    if (!doctor) {
      throw new NotFoundException(`Doctor with ID ${createAppointmentDto.doctorId} not found`);
    }

    // Check if hospital exists
    const hospital = await this.prisma.hospital.findUnique({
      where: { id: createAppointmentDto.hospitalId },
    });

    if (!hospital) {
      throw new NotFoundException(`Hospital with ID ${createAppointmentDto.hospitalId} not found`);
    }

    // Check if doctor is associated with the hospital
    if (doctor.hospitalId !== createAppointmentDto.hospitalId) {
      throw new BadRequestException(`Doctor is not associated with the selected hospital`);
    }

    // Parse date
    const date = new Date(createAppointmentDto.date);

    // Create appointment
    return this.prisma.appointment.create({
      data: {
        date,
        preferredTime: createAppointmentDto.preferredTime,
        location: createAppointmentDto.location,
        type: createAppointmentDto.type,
        reason: createAppointmentDto.reason,
        status: AppointmentStatus.PENDING,
        patientId,
        doctorId: createAppointmentDto.doctorId,
        hospitalId: createAppointmentDto.hospitalId,
      },
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
        doctor: {
          include: {
            user: {
              include: {
                profile: true,
              },
            },
          },
        },
        hospital: true,
      },
    });
  }

  async findAllForPatient(patientId: number) {
    // Check if patient exists
    const patient = await this.prisma.patient.findUnique({
      where: { id: patientId },
    });

    if (!patient) {
      throw new NotFoundException(`Patient with ID ${patientId} not found`);
    }

    return this.prisma.appointment.findMany({
      where: { patientId },
      include: {
        doctor: {
          include: {
            user: {
              include: {
                profile: true,
              },
            },
          },
        },
        hospital: true,
      },
      orderBy: {
        date: 'desc',
      },
    });
  }

  async findAllForDoctor(doctorId: number) {
    // Check if doctor exists
    const doctor = await this.prisma.doctor.findUnique({
      where: { id: doctorId },
    });

    if (!doctor) {
      throw new NotFoundException(`Doctor with ID ${doctorId} not found`);
    }

    return this.prisma.appointment.findMany({
      where: { doctorId },
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
        hospital: true,
      },
      orderBy: {
        date: 'desc',
      },
    });
  }

  async findOne(id: number) {
    const appointment = await this.prisma.appointment.findUnique({
      where: { id },
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
        doctor: {
          include: {
            user: {
              include: {
                profile: true,
              },
            },
          },
        },
        hospital: true,
      },
    });

    if (!appointment) {
      throw new NotFoundException(`Appointment with ID ${id} not found`);
    }

    // Remove sensitive information
    const { password: patientPassword, ...patientUserWithoutPassword } = appointment.patient.user;
    appointment.patient.user = patientUserWithoutPassword as any;

    const { password: doctorPassword, ...doctorUserWithoutPassword } = appointment.doctor.user;
    appointment.doctor.user = doctorUserWithoutPassword as any;

    return appointment;
  }

  async update(id: number, updateAppointmentDto: UpdateAppointmentDto) {
    // Check if appointment exists
    const appointment = await this.prisma.appointment.findUnique({
      where: { id },
    });

    if (!appointment) {
      throw new NotFoundException(`Appointment with ID ${id} not found`);
    }

    // Parse date if provided
    const dateData = updateAppointmentDto.date 
        ? new Date(updateAppointmentDto.date) 
        : undefined;

    // Update appointment
    return this.prisma.appointment.update({
      where: { id },
      data: {
        ...(updateAppointmentDto.date && { date: dateData }),
        preferredTime: updateAppointmentDto.preferredTime,
        location: updateAppointmentDto.location,
        type: updateAppointmentDto.type,
        reason: updateAppointmentDto.reason,
        status: updateAppointmentDto.status,
      },
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
        doctor: {
          include: {
            user: {
              include: {
                profile: true,
              },
            },
          },
        },
        hospital: true,
      },
    });
  }

  async remove(id: number) {
    // Check if appointment exists
    const appointment = await this.prisma.appointment.findUnique({
      where: { id },
    });

    if (!appointment) {
      throw new NotFoundException(`Appointment with ID ${id} not found`);
    }

    await this.prisma.appointment.delete({
      where: { id },
    });

    return { message: `Appointment with ID ${id} deleted successfully` };
  }
} 