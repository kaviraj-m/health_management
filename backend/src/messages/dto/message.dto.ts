import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateMessageDto {
  @ApiProperty({ example: 'Hello, how are you feeling today?' })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  receiverId: number;
}

export class UpdateMessageReadStatusDto {
  @ApiProperty({ example: true })
  @IsNotEmpty()
  isRead: boolean;
} 