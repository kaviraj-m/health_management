import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDateString, IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePatientDto {
  @ApiProperty({ example: 'patient@example.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'password123' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({ example: 'John' })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ example: 'Doe' })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({ example: '+12345678901', required: false })
  @IsString()
  @IsOptional()
  phone?: string;

  @ApiProperty({ example: '1990-01-01', required: false })
  @IsDateString()
  @IsOptional()
  dateOfBirth?: string;

  @ApiProperty({ example: 'Male', required: false })
  @IsString()
  @IsOptional()
  gender?: string;

  @ApiProperty({ example: '+12345678902', required: false })
  @IsString()
  @IsOptional()
  emergencyContact?: string;
}

export class UpdatePatientDto {
  @ApiProperty({ example: '1990-01-01', required: false })
  @IsDateString()
  @IsOptional()
  dateOfBirth?: string;

  @ApiProperty({ example: 'Male', required: false })
  @IsString()
  @IsOptional()
  gender?: string;

  @ApiProperty({ example: '+12345678902', required: false })
  @IsString()
  @IsOptional()
  emergencyContact?: string;
}

export class UpdatePatientProfileDto {
  @ApiProperty({ example: 'John', required: false })
  @IsString()
  @IsOptional()
  firstName?: string;

  @ApiProperty({ example: 'Doe', required: false })
  @IsString()
  @IsOptional()
  lastName?: string;

  @ApiProperty({ example: '+12345678901', required: false })
  @IsString()
  @IsOptional()
  phone?: string;

  @ApiProperty({ example: '1990-01-01', required: false })
  @IsDateString()
  @IsOptional()
  dateOfBirth?: string;

  @ApiProperty({ example: 'Male', required: false })
  @IsString()
  @IsOptional()
  gender?: string;

  @ApiProperty({ example: '+12345678902', required: false })
  @IsString()
  @IsOptional()
  emergencyContact?: string;

  @ApiProperty({ example: 'avatar-url.jpg', required: false })
  @IsString()
  @IsOptional()
  avatar?: string;
}

export class PatientResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  dateOfBirth: Date;

  @ApiProperty()
  gender: string;

  @ApiProperty()
  emergencyContact: string;

  @ApiProperty()
  userId: number;

  @ApiProperty()
  user: {
    id: number;
    email: string;
    profile: {
      firstName: string;
      lastName: string;
      phone: string;
      avatar: string;
    };
  };

  @ApiProperty()
  medicalConditions: Array<{
    id: number;
    name: string;
    description: string;
    diagnosedAt: Date;
  }>;

  @ApiProperty()
  healthRecords: Array<{
    id: number;
    date: Date;
    bloodPressure: string;
    heartRate: number;
    bloodGlucose: number;
    notes: string;
  }>;
} 