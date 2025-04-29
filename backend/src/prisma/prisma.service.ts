import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super({
      log: ['query', 'info', 'warn', 'error'],
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  async cleanDatabase() {
    if (process.env.NODE_ENV === 'production') {
      return;
    }
    
    // Transaction to ensure all deletes succeed or fail together
    return this.$transaction([
      this.dosAndDonts.deleteMany(),
      this.medicationReminder.deleteMany(),
      this.healthRecord.deleteMany(),
      this.medicalCondition.deleteMany(),
      this.message.deleteMany(),
      this.appointment.deleteMany(),
      this.patient.deleteMany(),
      this.doctor.deleteMany(),
      this.hospital.deleteMany(),
      this.profile.deleteMany(),
      this.user.deleteMany(),
    ]);
  }
} 