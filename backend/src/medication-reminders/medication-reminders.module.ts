import { Module } from '@nestjs/common';
import { MedicationRemindersController } from './medication-reminders.controller';
import { MedicationRemindersService } from './medication-reminders.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [MedicationRemindersController],
  providers: [MedicationRemindersService, PrismaService],
  exports: [MedicationRemindersService],
})
export class MedicationRemindersModule {} 