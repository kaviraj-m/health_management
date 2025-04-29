import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto, UpdateMessageReadStatusDto } from './dto/message.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { GetUser } from '../auth/decorators/get-user.decorator';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Messages')
@Controller('messages')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
  @ApiOperation({ summary: 'Send a message to another user' })
  @ApiResponse({ status: 201, description: 'Message sent successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'User not found' })
  create(@GetUser('id') userId: number, @Body() createMessageDto: CreateMessageDto) {
    return this.messagesService.create(userId, createMessageDto);
  }

  @Get('conversations')
  @ApiOperation({ summary: 'Get all conversations for the current user' })
  @ApiResponse({ status: 200, description: 'Returns all conversations' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'User not found' })
  findUserConversations(@GetUser('id') userId: number) {
    return this.messagesService.findUserConversations(userId);
  }

  @Get('conversation/:userId')
  @ApiOperation({ summary: 'Get conversation with specific user' })
  @ApiResponse({ status: 200, description: 'Returns the conversation' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'User not found' })
  findConversation(
    @GetUser('id') currentUserId: number,
    @Param('userId', ParseIntPipe) otherUserId: number,
  ) {
    return this.messagesService.findConversation(currentUserId, otherUserId);
  }

  @Patch(':id/read')
  @ApiOperation({ summary: 'Mark a message as read or unread' })
  @ApiResponse({ status: 200, description: 'Message updated successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Message not found' })
  markAsRead(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMessageReadStatusDto: UpdateMessageReadStatusDto,
  ) {
    return this.messagesService.markAsRead(id, updateMessageReadStatusDto);
  }

  @Patch('read-all/:senderId')
  @ApiOperation({ summary: 'Mark all messages from a user as read' })
  @ApiResponse({ status: 200, description: 'Messages marked as read' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'User not found' })
  markAllAsRead(
    @GetUser('id') receiverId: number,
    @Param('senderId', ParseIntPipe) senderId: number,
  ) {
    return this.messagesService.markAllAsRead(senderId, receiverId);
  }
} 