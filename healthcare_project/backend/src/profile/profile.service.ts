import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateProfileDto } from './dto/profile.dto';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(userId: number) {
    // First, get the user with profile
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        profile: true,
      },
    });

    if (!user || !user.profile) {
      throw new NotFoundException(`Profile for user with ID ${userId} not found`);
    }

    // Remove sensitive information
    const { password, ...userWithoutPassword } = user as any;
    
    return {
      ...user.profile,
      user: userWithoutPassword,
    };
  }

  async update(userId: number, updateProfileDto: UpdateProfileDto) {
    // Check if profile exists
    const profile = await this.prisma.profile.findUnique({
      where: { userId },
    });

    if (!profile) {
      throw new NotFoundException(`Profile for user with ID ${userId} not found`);
    }

    // Update profile
    return this.prisma.profile.update({
      where: { userId },
      data: updateProfileDto,
    });
  }

  async uploadAvatar(userId: number, avatarUrl: string) {
    // Check if profile exists
    const profile = await this.prisma.profile.findUnique({
      where: { userId },
    });

    if (!profile) {
      throw new NotFoundException(`Profile for user with ID ${userId} not found`);
    }

    // Update avatar
    return this.prisma.profile.update({
      where: { userId },
      data: { avatar: avatarUrl },
    });
  }
} 