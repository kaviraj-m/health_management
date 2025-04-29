import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ForbiddenException, Query } from '@nestjs/common';
import { HealthRecordsService } from './health-records.service';
import { CreateHealthRecordDto, UpdateHealthRecordDto } from './dto/health-record.dto';
import { ApiBearerAuth, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../auth/types/role.enum';
import { GetUser } from '../auth/decorators/get-user.decorator';

@ApiTags('Health Records')
@Controller('health-records')
export class HealthRecordsController {
  constructor(private readonly healthRecordsService: HealthRecordsService) {}

  @Post('patient/:patientId')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.DOCTOR, Role.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new health record for a patient (Doctor/Admin only)' })
  @ApiResponse({ status: 201, description: 'The health record has been successfully created.' })
  @ApiResponse({ status: 404, description: 'Patient not found.' })
  create(
    @Param('patientId') patientId: string,
    @Body() createHealthRecordDto: CreateHealthRecordDto,
  ) {
    return this.healthRecordsService.create(+patientId, createHealthRecordDto);
  }

  @Get('patient/:patientId')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.DOCTOR, Role.ADMIN, Role.PATIENT)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all health records for a patient' })
  @ApiResponse({ status: 200, description: 'Return all health records for the patient.' })
  @ApiResponse({ status: 404, description: 'Patient not found.' })
  @ApiQuery({ name: 'from', required: false, description: 'Start date (YYYY-MM-DD)' })
  @ApiQuery({ name: 'to', required: false, description: 'End date (YYYY-MM-DD)' })
  @ApiQuery({ name: 'page', required: false, description: 'Page number for pagination' })
  @ApiQuery({ name: 'limit', required: false, description: 'Maximum records per page' })
  findAllForPatient(
    @Param('patientId') patientId: string,
    @GetUser() user: any,
    @Query('from') from?: string,
    @Query('to') to?: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    // For patients, only allow fetching their own records
    if (user.role === Role.PATIENT) {
      // Get the patient ID associated with this user
      return this.healthRecordsService.findPatientByUserIdAndValidateAccess(user.id, +patientId)
        .then(() => {
          return this.healthRecordsService.findAllForPatient(
            +patientId, 
            from, 
            to, 
            page ? parseInt(page) : undefined, 
            limit ? parseInt(limit) : undefined
          );
        });
    }
    
    // Doctors and admins can access any patient's records
    return this.healthRecordsService.findAllForPatient(
      +patientId, 
      from, 
      to, 
      page ? parseInt(page) : undefined, 
      limit ? parseInt(limit) : undefined
    );
  }

  @Get('my')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.PATIENT)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get health records for the currently authenticated patient' })
  @ApiResponse({ status: 200, description: 'Return all health records for the patient.' })
  @ApiResponse({ status: 404, description: 'Patient profile not found.' })
  @ApiQuery({ name: 'from', required: false, description: 'Start date (YYYY-MM-DD)' })
  @ApiQuery({ name: 'to', required: false, description: 'End date (YYYY-MM-DD)' })
  @ApiQuery({ name: 'page', required: false, description: 'Page number for pagination' })
  @ApiQuery({ name: 'limit', required: false, description: 'Maximum records per page' })
  async findMyHealthRecords(
    @GetUser() user: any,
    @Query('from') from?: string,
    @Query('to') to?: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    if (user.role !== Role.PATIENT) {
      throw new ForbiddenException('Only patients can access this endpoint');
    }
    
    // Find the patient ID for this user
    const patient = await this.healthRecordsService.findPatientByUserId(user.id);
    
    // Get health records for this patient
    return this.healthRecordsService.findAllForPatient(
      patient.id, 
      from, 
      to, 
      page ? parseInt(page) : undefined, 
      limit ? parseInt(limit) : undefined
    );
  }

  @Post('my')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.PATIENT)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new health record for the currently authenticated patient' })
  @ApiResponse({ status: 201, description: 'The health record has been successfully created.' })
  @ApiResponse({ status: 404, description: 'Patient profile not found.' })
  async createMyHealthRecord(
    @GetUser() user: any,
    @Body() createHealthRecordDto: CreateHealthRecordDto,
  ) {
    if (user.role !== Role.PATIENT) {
      throw new ForbiddenException('Only patients can access this endpoint');
    }
    
    // Find the patient ID for this user
    const patient = await this.healthRecordsService.findPatientByUserId(user.id);
    
    // Create health record for this patient
    return this.healthRecordsService.create(patient.id, createHealthRecordDto);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get health record by ID' })
  @ApiResponse({ status: 200, description: 'Return the health record.' })
  @ApiResponse({ status: 404, description: 'Health record not found.' })
  async findOne(
    @Param('id') id: string,
    @GetUser() user: any,
  ) {
    const healthRecord = await this.healthRecordsService.findOne(+id);
    
    // If the user is a patient, ensure they can only access their own records
    if (user.role === Role.PATIENT) {
      await this.healthRecordsService.findPatientByUserIdAndValidateAccess(
        user.id, 
        healthRecord.patientId
      );
    }
    
    return healthRecord;
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update a health record' })
  @ApiResponse({ status: 200, description: 'The health record has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Health record not found.' })
  async update(
    @Param('id') id: string,
    @Body() updateHealthRecordDto: UpdateHealthRecordDto,
    @GetUser() user: any,
  ) {
    // For patients, only allow updating their own records
    if (user.role === Role.PATIENT) {
      const healthRecord = await this.healthRecordsService.findOne(+id);
      await this.healthRecordsService.findPatientByUserIdAndValidateAccess(
        user.id, 
        healthRecord.patientId
      );
    }
    
    return this.healthRecordsService.update(+id, updateHealthRecordDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.DOCTOR, Role.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete a health record (Doctor/Admin only)' })
  @ApiResponse({ status: 200, description: 'The health record has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Health record not found.' })
  remove(@Param('id') id: string) {
    return this.healthRecordsService.remove(+id);
  }
} 