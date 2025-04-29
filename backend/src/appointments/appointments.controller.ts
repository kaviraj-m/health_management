import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDto, UpdateAppointmentDto } from './dto/appointment.dto';

@ApiTags('appointments')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('appointments')
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Post('patient/:patientId')
  @ApiOperation({ summary: 'Create a new appointment for a patient' })
  @ApiResponse({ status: 201, description: 'The appointment has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 404, description: 'Patient, doctor, or hospital not found.' })
  create(
    @Param('patientId', ParseIntPipe) patientId: number,
    @Body() createAppointmentDto: CreateAppointmentDto,
  ) {
    return this.appointmentsService.create(patientId, createAppointmentDto);
  }

  @Get('patient/:patientId')
  @ApiOperation({ summary: 'Get all appointments for a patient' })
  @ApiResponse({ status: 200, description: 'Returns all appointments for the patient.' })
  @ApiResponse({ status: 404, description: 'Patient not found.' })
  findAllForPatient(@Param('patientId', ParseIntPipe) patientId: number) {
    return this.appointmentsService.findAllForPatient(patientId);
  }

  @Get('doctor/:doctorId')
  @ApiOperation({ summary: 'Get all appointments for a doctor' })
  @ApiResponse({ status: 200, description: 'Returns all appointments for the doctor.' })
  @ApiResponse({ status: 404, description: 'Doctor not found.' })
  findAllForDoctor(@Param('doctorId', ParseIntPipe) doctorId: number) {
    return this.appointmentsService.findAllForDoctor(doctorId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an appointment by ID' })
  @ApiResponse({ status: 200, description: 'Returns the appointment.' })
  @ApiResponse({ status: 404, description: 'Appointment not found.' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.appointmentsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an appointment' })
  @ApiResponse({ status: 200, description: 'The appointment has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Appointment not found.' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAppointmentDto: UpdateAppointmentDto,
  ) {
    return this.appointmentsService.update(id, updateAppointmentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an appointment' })
  @ApiResponse({ status: 200, description: 'The appointment has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Appointment not found.' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.appointmentsService.remove(id);
  }
} 