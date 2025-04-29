import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { CreateDoctorDto, UpdateDoctorDto } from './dto/doctor.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../auth/types/role.enum';

@ApiTags('Doctors')
@Controller('doctors')
export class DoctorsController {
  constructor(private readonly doctorsService: DoctorsService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new doctor (Admin only)' })
  @ApiResponse({ status: 201, description: 'The doctor has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad request - email or license number already exists.' })
  create(@Body() createDoctorDto: CreateDoctorDto) {
    return this.doctorsService.create(createDoctorDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all doctors' })
  @ApiResponse({ status: 200, description: 'Return all doctors.' })
  findAll() {
    return this.doctorsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get doctor by ID' })
  @ApiResponse({ status: 200, description: 'Return the doctor.' })
  @ApiResponse({ status: 404, description: 'Doctor not found.' })
  findOne(@Param('id') id: string) {
    return this.doctorsService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.DOCTOR)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update a doctor (Admin or the Doctor)' })
  @ApiResponse({ status: 200, description: 'The doctor has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Doctor not found.' })
  update(@Param('id') id: string, @Body() updateDoctorDto: UpdateDoctorDto) {
    return this.doctorsService.update(+id, updateDoctorDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete a doctor (Admin only)' })
  @ApiResponse({ status: 200, description: 'The doctor has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Doctor not found.' })
  remove(@Param('id') id: string) {
    return this.doctorsService.remove(+id);
  }
} 