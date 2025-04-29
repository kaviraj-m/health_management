import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { HospitalsModule } from './hospitals/hospitals.module';
import { DoctorsModule } from './doctors/doctors.module';
import { PatientsModule } from './patients/patients.module';
import { HealthRecordsModule } from './health-records/health-records.module';
import { MedicationRemindersModule } from './medication-reminders/medication-reminders.module';
import { MessagesModule } from './messages/messages.module';
import { DosAndDontsModule } from './dos-and-donts/dos-and-donts.module';
import { AdminModule } from './admin/admin.module';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    AuthModule,
    UsersModule,
    AppointmentsModule,
    HospitalsModule,
    DoctorsModule,
    PatientsModule,
    HealthRecordsModule,
    MedicationRemindersModule,
    MessagesModule,
    DosAndDontsModule,
    AdminModule,
    DashboardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
