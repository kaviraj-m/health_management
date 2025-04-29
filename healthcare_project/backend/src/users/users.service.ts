import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateUserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    const users = await this.prisma.user.findMany({
      include: {
        profile: true,
      },
    });

    return users.map(user => {
      const { password, ...userWithoutPassword } = user as any;
      return userWithoutPassword;
    });
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: {
        profile: true,
      },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    // Remove password
    const { password, ...userWithoutPassword } = user as any;
    return userWithoutPassword;
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
      include: {
        profile: true,
      },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    // First, check if the user exists
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: { profile: true },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    // Handle updates in a transaction
    const result = await this.prisma.$transaction(async (prisma) => {
      // Update user email if provided
      if (updateUserDto.email) {
        await prisma.user.update({
          where: { id },
          data: { email: updateUserDto.email },
        });
      }

      // Update profile information if provided
      const profileData: any = {};
      if (updateUserDto.firstName) profileData.firstName = updateUserDto.firstName;
      if (updateUserDto.lastName) profileData.lastName = updateUserDto.lastName;
      if (updateUserDto.phone) profileData.phone = updateUserDto.phone;
      if (updateUserDto.avatar) profileData.avatar = updateUserDto.avatar;

      if (Object.keys(profileData).length > 0) {
        await prisma.profile.update({
          where: { userId: id },
          data: profileData,
        });
      }

      // Get the updated user
      const updatedUser = await prisma.user.findUnique({
        where: { id },
        include: { profile: true },
      });

      // Remove password from the response
      const { password, ...userWithoutPassword } = updatedUser as any;
      return userWithoutPassword;
    });

    return result;
  }

  async remove(id: number) {
    // First, check if the user exists
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    // Delete the user (cascade will delete profile)
    await this.prisma.user.delete({
      where: { id },
    });

    return { message: `User with ID ${id} deleted successfully` };
  }
} 