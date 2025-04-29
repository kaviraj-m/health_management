import { Controller, Get, Param, ParseIntPipe, Query, UseGuards, ForbiddenException } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../auth/types/role.enum';
import { DashboardService } from './dashboard.service';
import { HealthAnalyticsQueryDto, HealthDashboardResponse } from './dto/dashboard.dto';
import { GetUser } from '../auth/decorators/get-user.decorator';

@ApiTags('Dashboard')
@Controller('dashboard')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('patients/:patientId/health-analytics')
  @UseGuards(RolesGuard)
  @Roles(Role.PATIENT, Role.DOCTOR, Role.ADMIN)
  @ApiOperation({ summary: 'Get health analytics for a specific patient' })
  @ApiResponse({ status: 200, description: 'Returns health analytics data', type: HealthDashboardResponse })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 403, description: 'Forbidden - Insufficient permissions' })
  @ApiResponse({ status: 404, description: 'Patient not found' })
  getHealthAnalytics(
    @Param('patientId', ParseIntPipe) patientId: number,
    @Query() query: HealthAnalyticsQueryDto,
  ) {
    return this.dashboardService.getHealthAnalytics(patientId, query);
  }

  @Get('patients/:patientId/appointment-analytics')
  @UseGuards(RolesGuard)
  @Roles(Role.PATIENT, Role.DOCTOR, Role.ADMIN)
  @ApiOperation({ summary: 'Get appointment analytics for a specific patient' })
  @ApiResponse({ status: 200, description: 'Returns appointment analytics data' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 403, description: 'Forbidden - Insufficient permissions' })
  @ApiResponse({ status: 404, description: 'Patient not found' })
  getAppointmentAnalytics(@Param('patientId', ParseIntPipe) patientId: number) {
    return this.dashboardService.getAppointmentAnalytics(patientId);
  }

  @Get('patients/:patientId/medication-adherence')
  @UseGuards(RolesGuard)
  @Roles(Role.PATIENT, Role.DOCTOR, Role.ADMIN)
  @ApiOperation({ summary: 'Get medication adherence analytics for a specific patient' })
  @ApiResponse({ status: 200, description: 'Returns medication adherence data' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 403, description: 'Forbidden - Insufficient permissions' })
  @ApiResponse({ status: 404, description: 'Patient not found' })
  getMedicationAdherenceAnalytics(@Param('patientId', ParseIntPipe) patientId: number) {
    return this.dashboardService.getMedicationAdherenceAnalytics(patientId);
  }

  @Get('my/health-analytics')
  @UseGuards(RolesGuard)
  @Roles(Role.PATIENT)
  @ApiOperation({ summary: 'Get health analytics for the current patient (based on JWT token)' })
  @ApiResponse({ status: 200, description: 'Returns health analytics data', type: HealthDashboardResponse })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 403, description: 'Forbidden - User is not a patient' })
  @ApiResponse({ status: 404, description: 'Patient profile not found' })
  async getMyHealthAnalytics(
    @GetUser() user: any,
    @Query() query: HealthAnalyticsQueryDto,
  ) {
    if (user.role !== Role.PATIENT) {
      throw new ForbiddenException('Access denied: Only patients can access this endpoint');
    }

    // Find the patient profile for this user
    const patient = await this.dashboardService.findPatientByUserId(user.id);
    
    // Call the existing method with the patient ID
    return this.dashboardService.getHealthAnalytics(patient.id, query);
  }

  @Get('my/appointment-analytics')
  @UseGuards(RolesGuard)
  @Roles(Role.PATIENT)
  @ApiOperation({ summary: 'Get appointment analytics for the current patient (based on JWT token)' })
  @ApiResponse({ status: 200, description: 'Returns appointment analytics data' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 403, description: 'Forbidden - User is not a patient' })
  @ApiResponse({ status: 404, description: 'Patient profile not found' })
  async getMyAppointmentAnalytics(
    @GetUser() user: any,
  ) {
    if (user.role !== Role.PATIENT) {
      throw new ForbiddenException('Access denied: Only patients can access this endpoint');
    }

    // Find the patient profile for this user
    const patient = await this.dashboardService.findPatientByUserId(user.id);
    
    // Call the existing method with the patient ID
    return this.dashboardService.getAppointmentAnalytics(patient.id);
  }

  @Get('my/medication-adherence')
  @UseGuards(RolesGuard)
  @Roles(Role.PATIENT)
  @ApiOperation({ summary: 'Get medication adherence analytics for the current patient (based on JWT token)' })
  @ApiResponse({ status: 200, description: 'Returns medication adherence data' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 403, description: 'Forbidden - User is not a patient' })
  @ApiResponse({ status: 404, description: 'Patient profile not found' })
  async getMyMedicationAdherenceAnalytics(
    @GetUser() user: any,
  ) {
    if (user.role !== Role.PATIENT) {
      throw new ForbiddenException('Access denied: Only patients can access this endpoint');
    }

    // Find the patient profile for this user
    const patient = await this.dashboardService.findPatientByUserId(user.id);
    
    // Call the existing method with the patient ID
    return this.dashboardService.getMedicationAdherenceAnalytics(patient.id);
  }
} 