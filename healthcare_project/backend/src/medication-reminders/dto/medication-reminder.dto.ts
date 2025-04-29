import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsDateString, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateMedicationReminderDto {
  @ApiProperty({ example: 'Metformin' })
  @IsString()
  @IsNotEmpty()
  medication: string;

  @ApiProperty({ example: '500mg', required: false })
  @IsString()
  @IsOptional()
  dosage?: string;

  @ApiProperty({ example: 'Twice daily' })
  @IsString()
  @IsNotEmpty()
  frequency: string;

  @ApiProperty({ example: '2023-01-01' })
  @IsDateString()
  @IsNotEmpty()
  startDate: string;

  @ApiProperty({ example: '2023-12-31', required: false })
  @IsDateString()
  @IsOptional()
  endDate?: string;

  @ApiProperty({ example: ['08:00', '20:00'] })
  @IsArray()
  @IsNotEmpty()
  timeArray: string[];
}

export class UpdateMedicationReminderDto {
  @ApiProperty({ example: 'Metformin', required: false })
  @IsString()
  @IsOptional()
  medication?: string;

  @ApiProperty({ example: '500mg', required: false })
  @IsString()
  @IsOptional()
  dosage?: string;

  @ApiProperty({ example: 'Twice daily', required: false })
  @IsString()
  @IsOptional()
  frequency?: string;

  @ApiProperty({ example: '2023-01-01', required: false })
  @IsDateString()
  @IsOptional()
  startDate?: string;

  @ApiProperty({ example: '2023-12-31', required: false })
  @IsDateString()
  @IsOptional()
  endDate?: string;

  @ApiProperty({ example: ['08:00', '20:00'], required: false })
  @IsArray()
  @IsOptional()
  timeArray?: string[];
} 