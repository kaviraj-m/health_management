import { Controller, Get, Post, Put, Patch, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiParam, ApiQuery } from '@nestjs/swagger';
import { AdminService } from './admin.service';
import { UserQueryDto, AdminUpdateUserDto, AdminUserProfileUpdateDto } from './dto/admin-user.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../auth/types/role.enum';
import { CreateUserDto, ResetPasswordDto } from './dto/admin-user.dto';

@ApiTags('Admin')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(Role.ADMIN)
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('users')
  @ApiOperation({ summary: 'List all users with filtering and pagination' })
  @ApiResponse({ 
    status: 200, 
    description: 'Returns a paginated list of users'
  })
  async findAllUsers(@Query() query: UserQueryDto) {
    return this.adminService.findAllUsers(query);
  }

  @Post('users')
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({ status: 201, description: 'User created successfully' })
  @ApiResponse({ status: 409, description: 'Email already in use' })
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.adminService.createUser(createUserDto);
  }

  @Get('users/:id')
  @ApiOperation({ summary: 'Get a user by ID' })
  @ApiParam({ name: 'id', description: 'User ID' })
  @ApiResponse({ status: 200, description: 'Returns the user' })
  @ApiResponse({ status: 404, description: 'User not found' })
  async findUserById(@Param('id') id: string) {
    return this.adminService.findUserById(id);
  }

  @Put('users/:id')
  @ApiOperation({ summary: 'Update a user' })
  @ApiParam({ name: 'id', description: 'User ID' })
  @ApiResponse({ status: 200, description: 'Returns the updated user' })
  @ApiResponse({ status: 404, description: 'User not found' })
  @ApiResponse({ status: 409, description: 'Email already in use' })
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: AdminUpdateUserDto,
  ) {
    return this.adminService.updateUser(id, updateUserDto);
  }

  @Patch('users/:id/profile')
  @ApiOperation({ summary: 'Update a user profile' })
  @ApiParam({ name: 'id', description: 'User ID' })
  @ApiResponse({ status: 200, description: 'Returns the user with updated profile' })
  @ApiResponse({ status: 404, description: 'User not found' })
  async updateUserProfile(
    @Param('id') id: string,
    @Body() profileDto: AdminUserProfileUpdateDto,
  ) {
    return this.adminService.updateUserProfile(id, profileDto);
  }

  @Patch('users/:id/disable')
  @ApiOperation({ summary: 'Disable a user account (sets isDisabled flag in profile)' })
  @ApiParam({ name: 'id', description: 'User ID' })
  @ApiResponse({ status: 200, description: 'Returns the disabled user' })
  @ApiResponse({ status: 404, description: 'User not found' })
  async disableUser(@Param('id') id: string) {
    return this.adminService.disableUser(id);
  }

  @Patch('users/:id/enable')
  @ApiOperation({ summary: 'Enable a user account (clears isDisabled flag in profile)' })
  @ApiParam({ name: 'id', description: 'User ID' })
  @ApiResponse({ status: 200, description: 'Returns the enabled user' })
  @ApiResponse({ status: 404, description: 'User not found' })
  async enableUser(@Param('id') id: string) {
    return this.adminService.enableUser(id);
  }

  @Post('users/:id/reset-password')
  @ApiOperation({ summary: 'Reset a user password' })
  @ApiParam({ name: 'id', description: 'User ID' })
  @ApiResponse({ status: 200, description: 'Password reset successfully' })
  @ApiResponse({ status: 404, description: 'User not found' })
  async resetPassword(
    @Param('id') id: string, 
    @Body() resetPasswordDto: ResetPasswordDto
  ) {
    return this.adminService.resetUserPassword(id, resetPasswordDto.newPassword);
  }

  @Delete('users/:id')
  @ApiOperation({ summary: 'Delete a user' })
  @ApiParam({ name: 'id', description: 'User ID' })
  @ApiResponse({ status: 200, description: 'User deleted successfully' })
  @ApiResponse({ status: 404, description: 'User not found' })
  async deleteUser(@Param('id') id: string) {
    return this.adminService.deleteUser(id);
  }

  @Get('stats/users')
  @ApiOperation({ summary: 'Get user statistics' })
  @ApiResponse({ status: 200, description: 'Returns user statistics' })
  async getUserStats() {
    return this.adminService.getUserStats();
  }
} 