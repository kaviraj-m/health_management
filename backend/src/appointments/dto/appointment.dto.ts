import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export enum AppointmentType {
  IN_PERSON = 'IN_PERSON',
  VIRTUAL = 'VIRTUAL',
}

export enum AppointmentStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  RESCHEDULED = 'RESCHEDULED',
  CANCELLED = 'CANCELLED',
  COMPLETED = 'COMPLETED',
}

export class CreateAppointmentDto {
  @ApiProperty({ example: '2023-05-01T10:00:00Z' })
  @IsDateString()
  @IsNotEmpty()
  date: string;

  @ApiProperty({ example: '10:00 AM', required: false })
  @IsString()
  @IsOptional()
  preferredTime?: string;

  @ApiProperty({ example: 'Room 101', required: false })
  @IsString()
  @IsOptional()
  location?: string;

  @ApiProperty({ enum: AppointmentType, default: AppointmentType.IN_PERSON })
  @IsEnum(AppointmentType)
  @IsOptional()
  type?: AppointmentType;

  @ApiProperty({ example: 'Routine checkup', required: false })
  @IsString()
  @IsOptional()
  reason?: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  doctorId: number;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  hospitalId: number;
}

export class UpdateAppointmentDto {
  @ApiProperty({ example: '2023-05-01T10:00:00Z', required: false })
  @IsDateString()
  @IsOptional()
  date?: string;

  @ApiProperty({ example: '10:00 AM', required: false })
  @IsString()
  @IsOptional()
  preferredTime?: string;

  @ApiProperty({ example: 'Room 101', required: false })
  @IsString()
  @IsOptional()
  location?: string;

  @ApiProperty({ enum: AppointmentType, required: false })
  @IsEnum(AppointmentType)
  @IsOptional()
  type?: AppointmentType;

  @ApiProperty({ example: 'Routine checkup', required: false })
  @IsString()
  @IsOptional()
  reason?: string;

  @ApiProperty({ enum: AppointmentStatus, required: false })
  @IsEnum(AppointmentStatus)
  @IsOptional()
  status?: AppointmentStatus;
} 