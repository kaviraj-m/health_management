import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe, Req, UnauthorizedException } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDto, UpdateAppointmentDto } from './dto/appointment.dto';
import { Request } from 'express';
import { User } from '@prisma/client';

@ApiTags('appointments')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('appointments')
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Post('me')
  @ApiOperation({ summary: 'Create a new appointment for the authenticated user' })
  @ApiResponse({ status: 201, description: 'The appointment has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 404, description: 'Doctor or hospital not found.' })
  createForMe(@Req() req: Request, @Body() createAppointmentDto: CreateAppointmentDto) {
    if (!req.user) {
      throw new UnauthorizedException('User not authenticated');
    }
    return this.appointmentsService.createForMe(req.user as User, createAppointmentDto);
  }

  @Get('me')
  @ApiOperation({ summary: 'Get all appointments for the authenticated user' })
  @ApiResponse({ status: 200, description: 'Returns all appointments for the user.' })
  findAllForMe(@Req() req: Request) {
    if (!req.user) {
      throw new UnauthorizedException('User not authenticated');
    }
    return this.appointmentsService.findAllForMe(req.user as User);
  }

  @Get('me/:id')
  @ApiOperation({ summary: 'Get an appointment by ID for the authenticated user' })
  @ApiResponse({ status: 200, description: 'Returns the appointment.' })
  @ApiResponse({ status: 404, description: 'Appointment not found.' })
  findOneForMe(@Req() req: Request, @Param('id', ParseIntPipe) id: number) {
    if (!req.user) {
      throw new UnauthorizedException('User not authenticated');
    }
    return this.appointmentsService.findOneForMe(req.user as User, id);
  }

  @Patch('me/:id')
  @ApiOperation({ summary: 'Update an appointment for the authenticated user' })
  @ApiResponse({ status: 200, description: 'The appointment has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Appointment not found.' })
  updateForMe(
    @Req() req: Request,
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAppointmentDto: UpdateAppointmentDto,
  ) {
    if (!req.user) {
      throw new UnauthorizedException('User not authenticated');
    }
    return this.appointmentsService.updateForMe(req.user as User, id, updateAppointmentDto);
  }

  @Delete('me/:id')
  @ApiOperation({ summary: 'Delete an appointment for the authenticated user' })
  @ApiResponse({ status: 200, description: 'The appointment has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Appointment not found.' })
  removeForMe(@Req() req: Request, @Param('id', ParseIntPipe) id: number) {
    if (!req.user) {
      throw new UnauthorizedException('User not authenticated');
    }
    return this.appointmentsService.removeForMe(req.user as User, id);
  }

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