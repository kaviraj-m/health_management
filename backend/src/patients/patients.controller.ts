import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto, UpdatePatientDto, UpdatePatientProfileDto } from './dto/patient.dto';
import { CreateMedicalConditionDto } from './dto/medical-condition.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../auth/types/role.enum';
import { GetUser } from '../auth/decorators/get-user.decorator';

@ApiTags('Patients')
@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new patient' })
  @ApiResponse({ status: 201, description: 'The patient has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad request - email already exists.' })
  create(@Body() createPatientDto: CreatePatientDto) {
    return this.patientsService.create(createPatientDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.DOCTOR)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all patients (Admin and Doctors only)' })
  @ApiResponse({ status: 200, description: 'Return all patients.' })
  findAll() {
    return this.patientsService.findAll();
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get current patient profile using JWT token' })
  @ApiResponse({ status: 200, description: 'Return the patient profile.' })
  @ApiResponse({ status: 403, description: 'Forbidden - User is not a patient.' })
  @ApiResponse({ status: 404, description: 'Patient profile not found.' })
  async getProfile(@GetUser() user: any) {
    return this.patientsService.findByUserId(user.id);
  }

  @Patch('profile')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update current patient profile using JWT token' })
  @ApiResponse({ status: 200, description: 'The patient profile has been successfully updated.' })
  @ApiResponse({ status: 403, description: 'Forbidden - User is not a patient.' })
  @ApiResponse({ status: 404, description: 'Patient profile not found.' })
  async updateProfile(
    @GetUser() user: any,
    @Body() updatePatientProfileDto: UpdatePatientProfileDto
  ) {
    return this.patientsService.updateProfile(user.id, updatePatientProfileDto);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get patient by ID' })
  @ApiResponse({ status: 200, description: 'Return the patient.' })
  @ApiResponse({ status: 404, description: 'Patient not found.' })
  findOne(@Param('id') id: string) {
    return this.patientsService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update a patient' })
  @ApiResponse({ status: 200, description: 'The patient has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Patient not found.' })
  update(@Param('id') id: string, @Body() updatePatientDto: UpdatePatientDto) {
    return this.patientsService.update(+id, updatePatientDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete a patient (Admin only)' })
  @ApiResponse({ status: 200, description: 'The patient has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Patient not found.' })
  remove(@Param('id') id: string) {
    return this.patientsService.remove(+id);
  }

  @Post(':id/medical-conditions')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Add a medical condition to a patient' })
  @ApiResponse({ status: 201, description: 'The medical condition has been successfully added.' })
  @ApiResponse({ status: 404, description: 'Patient not found.' })
  addMedicalCondition(
    @Param('id') id: string,
    @Body() createMedicalConditionDto: CreateMedicalConditionDto,
  ) {
    return this.patientsService.addMedicalCondition(+id, createMedicalConditionDto);
  }

  @Get(':id/medical-conditions')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all medical conditions for a patient' })
  @ApiResponse({ status: 200, description: 'Return all medical conditions.' })
  @ApiResponse({ status: 404, description: 'Patient not found.' })
  getMedicalConditions(@Param('id') id: string) {
    return this.patientsService.getMedicalConditions(+id);
  }
} 