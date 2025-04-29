import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateHealthRecordDto, UpdateHealthRecordDto } from './dto/health-record.dto';

@Injectable()
export class HealthRecordsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(patientId: number, createHealthRecordDto: CreateHealthRecordDto) {
    // Check if patient exists
    const patient = await this.prisma.patient.findUnique({
      where: { id: patientId },
    });

    if (!patient) {
      throw new NotFoundException(`Patient with ID ${patientId} not found`);
    }

    // Parse date if provided
    let date: Date | null = null;
    if (createHealthRecordDto.date) {
      date = new Date(createHealthRecordDto.date);
    } else {
      date = new Date(); // Default to current date
    }

    // Create health record
    return this.prisma.healthRecord.create({
      data: {
        date,
        bloodPressure: createHealthRecordDto.bloodPressure,
        heartRate: createHealthRecordDto.heartRate,
        bloodGlucose: createHealthRecordDto.bloodGlucose,
        notes: createHealthRecordDto.notes,
        patientId,
      },
    });
  }

  async findAllForPatient(
    patientId: number, 
    from?: string, 
    to?: string, 
    page: number = 1, 
    limit: number = 10
  ) {
    // Check if patient exists
    const patient = await this.prisma.patient.findUnique({
      where: { id: patientId },
    });

    if (!patient) {
      throw new NotFoundException(`Patient with ID ${patientId} not found`);
    }

    // Build date filter if dates are provided
    const dateFilter: any = {};
    if (from) {
      dateFilter.gte = new Date(from);
    }
    if (to) {
      dateFilter.lte = new Date(to);
    }

    // Calculate pagination
    const skip = (page - 1) * limit;

    // Find health records with filtering and pagination
    const [records, total] = await Promise.all([
      this.prisma.healthRecord.findMany({
        where: { 
          patientId,
          ...(Object.keys(dateFilter).length > 0 ? { date: dateFilter } : {})
        },
        orderBy: {
          date: 'desc',
        },
        skip,
        take: limit,
      }),
      this.prisma.healthRecord.count({
        where: { 
          patientId,
          ...(Object.keys(dateFilter).length > 0 ? { date: dateFilter } : {})
        },
      })
    ]);

    // Return paginated response
    const totalPages = Math.ceil(total / limit);
    
    return {
      data: records,
      meta: {
        total,
        page,
        limit,
        totalPages
      }
    };
  }

  async findOne(id: number) {
    const healthRecord = await this.prisma.healthRecord.findUnique({
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
      },
    });

    if (!healthRecord) {
      throw new NotFoundException(`Health record with ID ${id} not found`);
    }

    // Remove sensitive information
    if (healthRecord.patient?.user?.password) {
      const { password, ...userWithoutPassword } = healthRecord.patient.user;
      healthRecord.patient.user = userWithoutPassword as any;
    }

    return healthRecord;
  }

  async update(id: number, updateHealthRecordDto: UpdateHealthRecordDto) {
    // Check if health record exists
    const healthRecord = await this.prisma.healthRecord.findUnique({
      where: { id },
    });

    if (!healthRecord) {
      throw new NotFoundException(`Health record with ID ${id} not found`);
    }

    // Update health record
    return this.prisma.healthRecord.update({
      where: { id },
      data: updateHealthRecordDto,
    });
  }

  async remove(id: number) {
    // Check if health record exists
    const healthRecord = await this.prisma.healthRecord.findUnique({
      where: { id },
    });

    if (!healthRecord) {
      throw new NotFoundException(`Health record with ID ${id} not found`);
    }

    await this.prisma.healthRecord.delete({
      where: { id },
    });

    return { message: `Health record with ID ${id} deleted successfully` };
  }

  // New methods for JWT-based patient endpoints

  async findPatientByUserId(userId: number) {
    const patient = await this.prisma.patient.findUnique({
      where: { userId },
    });

    if (!patient) {
      throw new NotFoundException(`Patient profile not found for user ID ${userId}`);
    }

    return patient;
  }

  async findPatientByUserIdAndValidateAccess(userId: number, patientId: number) {
    const patient = await this.findPatientByUserId(userId);
    
    // Verify that the user is trying to access their own records
    if (patient.id !== patientId) {
      throw new ForbiddenException('You can only access your own health records');
    }
    
    return patient;
  }
} 