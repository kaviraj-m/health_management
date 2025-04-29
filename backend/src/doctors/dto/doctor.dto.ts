import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateDoctorDto {
  @ApiProperty({ example: 'doctor@example.com' })
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

  @ApiProperty({ example: 'Cardiology' })
  @IsString()
  @IsNotEmpty()
  specialization: string;

  @ApiProperty({ example: 'MD12345' })
  @IsString()
  @IsNotEmpty()
  licenseNumber: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  hospitalId: number;
}

export class UpdateDoctorDto {
  @ApiProperty({ example: 'Cardiology', required: false })
  @IsString()
  @IsOptional()
  specialization?: string;

  @ApiProperty({ example: 1, required: false })
  @IsNumber()
  @IsOptional()
  hospitalId?: number;
}

export class DoctorResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  specialization: string;

  @ApiProperty()
  licenseNumber: string;

  @ApiProperty()
  hospitalId: number;

  @ApiProperty()
  userId: number;

  @ApiProperty()
  hospital?: {
    id: number;
    name: string;
    address: string;
    city: string;
  };

  @ApiProperty()
  user?: {
    id: number;
    email: string;
    profile: {
      firstName: string;
      lastName: string;
      phone?: string;
      avatar?: string;
    };
  };
} 