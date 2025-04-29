import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { HospitalsService } from './hospitals.service';
import { CreateHospitalDto, UpdateHospitalDto } from './dto/hospital.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../auth/types/role.enum';

@ApiTags('Hospitals')
@Controller('hospitals')
export class HospitalsController {
  constructor(private readonly hospitalsService: HospitalsService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new hospital (Admin only)' })
  @ApiResponse({ status: 201, description: 'The hospital has been successfully created.' })
  create(@Body() createHospitalDto: CreateHospitalDto) {
    return this.hospitalsService.create(createHospitalDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all hospitals' })
  @ApiResponse({ status: 200, description: 'Return all hospitals.' })
  findAll() {
    return this.hospitalsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get hospital by ID' })
  @ApiResponse({ status: 200, description: 'Return the hospital.' })
  @ApiResponse({ status: 404, description: 'Hospital not found.' })
  findOne(@Param('id') id: string) {
    return this.hospitalsService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update a hospital (Admin only)' })
  @ApiResponse({ status: 200, description: 'The hospital has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Hospital not found.' })
  update(@Param('id') id: string, @Body() updateHospitalDto: UpdateHospitalDto) {
    return this.hospitalsService.update(+id, updateHospitalDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete a hospital (Admin only)' })
  @ApiResponse({ status: 200, description: 'The hospital has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Hospital not found.' })
  remove(@Param('id') id: string) {
    return this.hospitalsService.remove(+id);
  }
} 