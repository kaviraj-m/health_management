import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, NotFoundException } from '@nestjs/common';
import { MedicationRemindersService } from './medication-reminders.service';
import { CreateMedicationReminderDto, UpdateMedicationReminderDto } from './dto/medication-reminder.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../auth/types/role.enum';
import { PrismaService } from '../prisma/prisma.service';

@ApiTags('Medication Reminders')
@Controller('medication-reminders')
export class MedicationRemindersController {
  constructor(
    private readonly medicationRemindersService: MedicationRemindersService,
    private readonly prisma: PrismaService
  ) {}

  @Get('my')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all medication reminders for the current user' })
  @ApiResponse({ status: 200, description: 'Return all medication reminders for the current user.' })
  @ApiResponse({ status: 404, description: 'Patient not found for user.' })
  findAllForCurrentUser(@Request() req) {
    return this.medicationRemindersService.findAllForCurrentUser(req.user.id);
  }

  @Post('my')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new medication reminder for the current user' })
  @ApiResponse({ status: 201, description: 'The medication reminder has been successfully created.' })
  @ApiResponse({ status: 404, description: 'Patient not found for user.' })
  async createForCurrentUser(
    @Request() req,
    @Body() createMedicationReminderDto: CreateMedicationReminderDto,
  ) {
    // First get the patient ID for the current user
    const patient = await this.prisma.patient.findFirst({
      where: { userId: req.user.id },
    });

    if (!patient) {
      throw new NotFoundException(`Patient not found for user with ID ${req.user.id}`);
    }

    return this.medicationRemindersService.create(patient.id, createMedicationReminderDto);
  }

  @Post('patient/:patientId')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new medication reminder for a patient' })
  @ApiResponse({ status: 201, description: 'The medication reminder has been successfully created.' })
  @ApiResponse({ status: 404, description: 'Patient not found.' })
  create(
    @Param('patientId') patientId: string,
    @Body() createMedicationReminderDto: CreateMedicationReminderDto,
  ) {
    return this.medicationRemindersService.create(+patientId, createMedicationReminderDto);
  }

  @Get('patient/:patientId')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all medication reminders for a patient' })
  @ApiResponse({ status: 200, description: 'Return all medication reminders for the patient.' })
  @ApiResponse({ status: 404, description: 'Patient not found.' })
  findAllForPatient(@Param('patientId') patientId: string) {
    return this.medicationRemindersService.findAllForPatient(+patientId);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get medication reminder by ID' })
  @ApiResponse({ status: 200, description: 'Return the medication reminder.' })
  @ApiResponse({ status: 404, description: 'Medication reminder not found.' })
  findOne(@Param('id') id: string) {
    return this.medicationRemindersService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update a medication reminder' })
  @ApiResponse({ status: 200, description: 'The medication reminder has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Medication reminder not found.' })
  update(
    @Param('id') id: string,
    @Body() updateMedicationReminderDto: UpdateMedicationReminderDto,
  ) {
    return this.medicationRemindersService.update(+id, updateMedicationReminderDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete a medication reminder' })
  @ApiResponse({ status: 200, description: 'The medication reminder has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Medication reminder not found.' })
  remove(@Param('id') id: string) {
    return this.medicationRemindersService.remove(+id);
  }
} 