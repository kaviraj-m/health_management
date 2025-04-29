import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, IsEnum, IsBoolean, IsInt, Min, Max, IsNotEmpty, IsUUID, IsArray, IsDateString, ValidateNested, IsNumber, IsIn, IsDate, MinLength, MaxLength, IsISO8601 } from 'class-validator';
import { Type } from 'class-transformer';
import { Role } from '../../auth/types/role.enum';

export class UserQueryDto {
  @ApiPropertyOptional({ description: 'Page number (starts from 1)' })
  @IsNumber()
  @IsOptional()
  @Min(1)
  @Type(() => Number)
  page?: number = 1;

  @ApiPropertyOptional({ description: 'Items per page' })
  @IsNumber()
  @IsOptional()
  @Min(1)
  @Max(100)
  @Type(() => Number)
  limit?: number = 10;

  @ApiPropertyOptional({ description: 'Sort field' })
  @IsString()
  @IsOptional()
  @IsIn(['email', 'createdAt', 'firstName', 'lastName'])
  sortBy?: string = 'createdAt';

  @ApiPropertyOptional({ description: 'Sort order' })
  @IsString()
  @IsOptional()
  @IsIn(['ASC', 'DESC'])
  sortOrder?: 'ASC' | 'DESC' = 'DESC';

  @ApiPropertyOptional({ description: 'Filter by email' })
  @IsString()
  @IsOptional()
  email?: string;

  @ApiPropertyOptional({ description: 'Filter by first name' })
  @IsString()
  @IsOptional()
  firstName?: string;

  @ApiPropertyOptional({ description: 'Filter by last name' })
  @IsString()
  @IsOptional()
  lastName?: string;

  @ApiPropertyOptional({ enum: Role, enumName: 'Role', description: 'Filter by role' })
  @IsEnum(Role)
  @IsOptional()
  role?: Role;

  @ApiPropertyOptional({ description: 'Filter by active status (true = not disabled, false = disabled)' })
  @IsBoolean()
  @IsOptional()
  @Type(() => Boolean)
  isActive?: boolean;
}

export class CreateUserDto {
  @ApiProperty({ description: 'User email' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'User password' })
  @IsString()
  @MinLength(8)
  password: string;

  @ApiProperty({ description: 'User first name' })
  @IsString()
  firstName: string;

  @ApiProperty({ description: 'User last name' })
  @IsString()
  lastName: string;

  @ApiPropertyOptional({ description: 'User phone number' })
  @IsString()
  @IsOptional()
  phone?: string;

  @ApiProperty({ enum: Role, enumName: 'Role', description: 'User role' })
  @IsEnum(Role)
  role: Role;
}

export class AdminUpdateUserDto {
  @ApiPropertyOptional({ description: 'User email' })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiPropertyOptional({ description: 'User role' })
  @IsEnum(Role)
  @IsOptional()
  role?: Role;
}

export class AdminUserProfileUpdateDto {
  @ApiPropertyOptional({ description: 'Profile phone number' })
  @IsString()
  @IsOptional()
  phone?: string;

  @ApiPropertyOptional({ description: 'Profile first name' })
  @IsString()
  @IsOptional()
  firstName?: string;

  @ApiPropertyOptional({ description: 'Profile last name' })
  @IsString()
  @IsOptional()
  lastName?: string;

  @ApiPropertyOptional({ description: 'Profile avatar URL' })
  @IsString()
  @IsOptional()
  avatar?: string;
}

export class ResetPasswordDto {
  @ApiProperty({ description: 'New password for the user' })
  @IsString()
  @MinLength(8)
  newPassword: string;
}

export class UserAuditLogDto {
  @ApiProperty({ description: 'Audit log ID' })
  id: number;

  @ApiProperty({ description: 'User ID' })
  userId: number;

  @ApiProperty({ description: 'Action performed' })
  action: string;

  @ApiProperty({ description: 'IP address' })
  ipAddress: string;
  
  @ApiProperty({ description: 'Timestamp' })
  timestamp: Date;

  @ApiProperty({ description: 'Additional details', nullable: true })
  details: string;
} 