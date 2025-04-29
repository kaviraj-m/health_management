import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateMedicalConditionDto {
  @ApiProperty({ example: 'Diabetes' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Type 2 diabetes diagnosed 5 years ago', required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ example: '2020-01-01', required: false })
  @IsDateString()
  @IsOptional()
  diagnosedAt?: string;
}

export class UpdateMedicalConditionDto {
  @ApiProperty({ example: 'Diabetes', required: false })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ example: 'Type 2 diabetes diagnosed 5 years ago', required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ example: '2020-01-01', required: false })
  @IsDateString()
  @IsOptional()
  diagnosedAt?: string;
} 