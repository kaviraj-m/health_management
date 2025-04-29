import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateHealthRecordDto {
  @ApiProperty({ example: '2023-01-01' })
  @IsDateString()
  @IsOptional()
  date?: string;

  @ApiProperty({ example: '120/80', required: false })
  @IsString()
  @IsOptional()
  bloodPressure?: string;

  @ApiProperty({ example: 75, required: false })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  heartRate?: number;

  @ApiProperty({ example: 110, required: false })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  bloodGlucose?: number;

  @ApiProperty({ example: 'Normal readings', required: false })
  @IsString()
  @IsOptional()
  notes?: string;
}

export class UpdateHealthRecordDto {
  @ApiProperty({ example: '120/80', required: false })
  @IsString()
  @IsOptional()
  bloodPressure?: string;

  @ApiProperty({ example: 75, required: false })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  heartRate?: number;

  @ApiProperty({ example: 110, required: false })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  bloodGlucose?: number;

  @ApiProperty({ example: 'Normal readings', required: false })
  @IsString()
  @IsOptional()
  notes?: string;
} 