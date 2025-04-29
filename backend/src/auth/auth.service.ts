import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { Role } from './types/role.enum';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    // Find user by email
    const user = await this.prisma.user.findUnique({
      where: { email },
      include: {
        profile: true,
      },
    });

    // Check if user exists
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Validate password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Generate JWT token
    const token = this.generateToken(user.id, user.email, user.role as unknown as Role);

    // Check if the user has patient or doctor roles
    const patientProfile = await this.prisma.patient.findUnique({
      where: { userId: user.id }
    });

    const doctorProfile = await this.prisma.doctor.findUnique({
      where: { userId: user.id }
    });

    // Return user and token
    return {
      token,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        profile: user.profile,
        patientId: patientProfile?.id,
        doctorId: doctorProfile?.id,
      },
    };
  }

  async register(registerDto: RegisterDto) {
    const { email, password, firstName, lastName, phone, role = Role.PATIENT } = registerDto;

    // Check if email is already in use
    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new BadRequestException('Email already in use');
    }

    // Hash password
    const hashedPassword = await this.hashPassword(password);

    // Create user and profile in a transaction
    const user = await this.prisma.$transaction(async (prisma) => {
      // Create user with profile
      const newUser = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          role,
          profile: {
            create: {
              firstName,
              lastName,
              phone,
            },
          },
        },
        include: {
          profile: true,
        },
      });

      // If the role is PATIENT, create a patient profile
      if (role === Role.PATIENT) {
        await prisma.patient.create({
          data: {
            userId: newUser.id,
          },
        });
      }

      return newUser;
    });

    // Generate JWT token
    const token = this.generateToken(user.id, user.email, user.role as unknown as Role);

    // Return user and token
    return {
      token,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        profile: user.profile,
      },
    };
  }

  async validateUser(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  private generateToken(userId: number, email: string, role: Role): string {
    const payload = {
      sub: userId,
      email,
      role,
    };

    return this.jwtService.sign(payload, {
      secret: this.configService.get('JWT_SECRET'),
      expiresIn: this.configService.get('JWT_EXPIRATION', '1d'),
    });
  }

  private async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt);
  }
} 