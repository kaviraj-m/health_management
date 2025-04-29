import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DosAndDontsService } from './dos-and-donts.service';
import { CreateDoAndDontDto, UpdateDoAndDontDto } from './dto/dos-and-donts.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../auth/types/role.enum';

@ApiTags('Dos And Donts')
@Controller('dos-and-donts')
export class DosAndDontsController {
  constructor(private readonly dosAndDontsService: DosAndDontsService) {}

  @Post('patient/:patientId')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new Do or Don\'t for a patient' })
  @ApiResponse({ status: 201, description: 'The Do or Don\'t has been successfully created.' })
  @ApiResponse({ status: 404, description: 'Patient not found.' })
  create(
    @Param('patientId') patientId: string,
    @Body() createDoAndDontDto: CreateDoAndDontDto,
  ) {
    return this.dosAndDontsService.create(+patientId, createDoAndDontDto);
  }

  @Get('patient/:patientId')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all Dos and Don\'ts for a patient' })
  @ApiResponse({ status: 200, description: 'Return all Dos and Don\'ts for the patient.' })
  @ApiResponse({ status: 404, description: 'Patient not found.' })
  findAllForPatient(@Param('patientId') patientId: string) {
    return this.dosAndDontsService.findAllForPatient(+patientId);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get Do or Don\'t by ID' })
  @ApiResponse({ status: 200, description: 'Return the Do or Don\'t.' })
  @ApiResponse({ status: 404, description: 'Do or Don\'t not found.' })
  findOne(@Param('id') id: string) {
    return this.dosAndDontsService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update a Do or Don\'t' })
  @ApiResponse({ status: 200, description: 'The Do or Don\'t has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Do or Don\'t not found.' })
  update(
    @Param('id') id: string,
    @Body() updateDoAndDontDto: UpdateDoAndDontDto,
  ) {
    return this.dosAndDontsService.update(+id, updateDoAndDontDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete a Do or Don\'t' })
  @ApiResponse({ status: 200, description: 'The Do or Don\'t has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Do or Don\'t not found.' })
  remove(@Param('id') id: string) {
    return this.dosAndDontsService.remove(+id);
  }
} 