import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateHospitalDto, UpdateHospitalDto } from './dto/hospital.dto';

@Injectable()
export class HospitalsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createHospitalDto: CreateHospitalDto) {
    return this.prisma.hospital.create({
      data: createHospitalDto,
    });
  }

  async findAll() {
    return this.prisma.hospital.findMany();
  }

  async findOne(id: number) {
    const hospital = await this.prisma.hospital.findUnique({
      where: { id },
      include: {
        doctors: {
          include: {
            user: {
              include: {
                profile: true,
              },
            },
          },
        },
      },
    });

    if (!hospital) {
      throw new NotFoundException(`Hospital with ID ${id} not found`);
    }

    return hospital;
  }

  async update(id: number, updateHospitalDto: UpdateHospitalDto) {
    try {
      return await this.prisma.hospital.update({
        where: { id },
        data: updateHospitalDto,
      });
    } catch (error) {
      throw new NotFoundException(`Hospital with ID ${id} not found`);
    }
  }

  async remove(id: number) {
    try {
      await this.prisma.hospital.delete({
        where: { id },
      });
      return { message: `Hospital with ID ${id} deleted successfully` };
    } catch (error) {
      throw new NotFoundException(`Hospital with ID ${id} not found`);
    }
  }
} 