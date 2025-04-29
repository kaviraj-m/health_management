import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { GetUser } from '../auth/decorators/get-user.decorator';
import { ProfileService } from './profile.service';
import { UpdateProfileDto } from './dto/profile.dto';
import * as multer from 'multer';
import * as path from 'path';
import * as fs from 'fs';

// Add Express types for Multer
interface MulterFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  destination: string;
  filename: string;
  path: string;
  buffer: Buffer;
}

@ApiTags('Profile')
@Controller('profile')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get('me')
  @ApiOperation({ summary: 'Get current user profile' })
  @ApiResponse({ status: 200, description: 'Returns the current user profile' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  findMyProfile(@GetUser('id') userId: number) {
    return this.profileService.findOne(userId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get profile by user ID' })
  @ApiResponse({ status: 200, description: 'Returns the user profile' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Profile not found' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.profileService.findOne(id);
  }

  @Patch('me')
  @ApiOperation({ summary: 'Update current user profile' })
  @ApiResponse({ status: 200, description: 'Profile updated successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Profile not found' })
  update(@GetUser('id') userId: number, @Body() updateProfileDto: UpdateProfileDto) {
    return this.profileService.update(userId, updateProfileDto);
  }

  @Post('avatar')
  @ApiOperation({ summary: 'Upload avatar image' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @ApiResponse({ status: 200, description: 'Avatar uploaded successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @UseInterceptors(
    FileInterceptor('file', {
      storage: multer.diskStorage({
        destination: (req, file, cb) => {
          const uploadPath = './uploads/avatars';
          if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
          }
          cb(null, uploadPath);
        },
        filename: (req, file, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = path.extname(file.originalname);
          cb(null, `avatar-${uniqueSuffix}${ext}`);
        },
      }),
      fileFilter: (req, file, cb) => {
        // Allow only images
        if (!file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
          return cb(new Error('Only image files are allowed!'), false);
        }
        cb(null, true);
      },
      limits: {
        fileSize: 1024 * 1024 * 5, // 5MB
      },
    }),
  )
  uploadAvatar(@GetUser('id') userId: number, @UploadedFile() file: MulterFile) {
    const avatarUrl = `/uploads/avatars/${file.filename}`;
    return this.profileService.uploadAvatar(userId, avatarUrl);
  }
} 