import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMedicationReminderDto, UpdateMedicationReminderDto } from './dto/medication-reminder.dto';

@Injectable()
export class MedicationRemindersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(patientId: number, createMedicationReminderDto: CreateMedicationReminderDto) {
    // Check if patient exists
    const patient = await this.prisma.patient.findUnique({
      where: { id: patientId },
    });

    if (!patient) {
      throw new NotFoundException(`Patient with ID ${patientId} not found`);
    }

    // Parse dates
    const startDate = new Date(createMedicationReminderDto.startDate);
    let endDate: Date | null = null;
    if (createMedicationReminderDto.endDate) {
      endDate = new Date(createMedicationReminderDto.endDate);
    }

    // Create Date objects for each time entry
    const timeObjects = createMedicationReminderDto.timeArray.map(timeStr => {
      const [hours, minutes] = timeStr.split(':').map(Number);
      const date = new Date();
      date.setHours(hours, minutes, 0, 0);
      return date;
    });

    // Create medication reminder
    return this.prisma.medicationReminder.create({
      data: {
        medication: createMedicationReminderDto.medication,
        dosage: createMedicationReminderDto.dosage,
        frequency: createMedicationReminderDto.frequency,
        startDate,
        endDate,
        time: timeObjects,
        patientId,
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

    return this.prisma.medicationReminder.findMany({
      where: { patientId },
    });
  }

  async findAllForCurrentUser(userId: number) {
    // First get the patient ID for the current user
    const patient = await this.prisma.patient.findFirst({
      where: { userId: userId },
    });

    if (!patient) {
      throw new NotFoundException(`Patient not found for user with ID ${userId}`);
    }

    // Then find all medication reminders for this patient
    return this.prisma.medicationReminder.findMany({
      where: { patientId: patient.id },
      orderBy: { startDate: 'desc' },
    });
  }

  async findOne(id: number) {
    const medicationReminder = await this.prisma.medicationReminder.findUnique({
      where: {
        id: id
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
      },
    });

    if (!medicationReminder) {
      throw new NotFoundException(`Medication reminder with ID ${id} not found`);
    }

    // Remove sensitive information
    const { password, ...userWithoutPassword } = medicationReminder.patient.user;
    medicationReminder.patient.user = userWithoutPassword as any;

    return medicationReminder;
  }

  async update(id: number, updateMedicationReminderDto: UpdateMedicationReminderDto) {
    // Check if medication reminder exists
    const medicationReminder = await this.prisma.medicationReminder.findUnique({
      where: { id },
    });

    if (!medicationReminder) {
      throw new NotFoundException(`Medication reminder with ID ${id} not found`);
    }

    // Prepare update data
    const updateData: any = {};

    if (updateMedicationReminderDto.medication) {
      updateData.medication = updateMedicationReminderDto.medication;
    }

    if (updateMedicationReminderDto.dosage) {
      updateData.dosage = updateMedicationReminderDto.dosage;
    }

    if (updateMedicationReminderDto.frequency) {
      updateData.frequency = updateMedicationReminderDto.frequency;
    }

    if (updateMedicationReminderDto.startDate) {
      updateData.startDate = new Date(updateMedicationReminderDto.startDate);
    }

    if (updateMedicationReminderDto.endDate) {
      updateData.endDate = new Date(updateMedicationReminderDto.endDate);
    }

    if (updateMedicationReminderDto.timeArray) {
      const timeObjects = updateMedicationReminderDto.timeArray.map(timeStr => {
        const [hours, minutes] = timeStr.split(':').map(Number);
        const date = new Date();
        date.setHours(hours, minutes, 0, 0);
        return date;
      });
      updateData.time = timeObjects;
    }

    // Update medication reminder
    return this.prisma.medicationReminder.update({
      where: { id },
      data: updateData,
    });
  }

  async remove(id: number) {
    // Check if medication reminder exists
    const medicationReminder = await this.prisma.medicationReminder.findUnique({
      where: { id },
    });

    if (!medicationReminder) {
      throw new NotFoundException(`Medication reminder with ID ${id} not found`);
    }

    await this.prisma.medicationReminder.delete({
      where: { id },
    });

    return { message: `Medication reminder with ID ${id} deleted successfully` };
  }
} 