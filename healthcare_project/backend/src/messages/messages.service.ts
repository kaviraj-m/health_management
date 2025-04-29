import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMessageDto, UpdateMessageReadStatusDto } from './dto/message.dto';

@Injectable()
export class MessagesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(senderId: number, createMessageDto: CreateMessageDto) {
    const { content, receiverId } = createMessageDto;

    // Check if sender exists
    const sender = await this.prisma.user.findUnique({
      where: { id: senderId },
    });

    if (!sender) {
      throw new NotFoundException(`User with ID ${senderId} not found`);
    }

    // Check if receiver exists
    const receiver = await this.prisma.user.findUnique({
      where: { id: receiverId },
    });

    if (!receiver) {
      throw new NotFoundException(`User with ID ${receiverId} not found`);
    }

    // Create message
    return this.prisma.message.create({
      data: {
        content,
        senderId,
        receiverId,
        isRead: false,
      },
      include: {
        sender: {
          include: {
            profile: true,
          },
        },
        receiver: {
          include: {
            profile: true,
          },
        },
      },
    });
  }

  async findConversation(userId1: number, userId2: number) {
    // Check if both users exist
    const user1 = await this.prisma.user.findUnique({
      where: { id: userId1 },
    });

    if (!user1) {
      throw new NotFoundException(`User with ID ${userId1} not found`);
    }

    const user2 = await this.prisma.user.findUnique({
      where: { id: userId2 },
    });

    if (!user2) {
      throw new NotFoundException(`User with ID ${userId2} not found`);
    }

    // Get messages between the two users
    return this.prisma.message.findMany({
      where: {
        OR: [
          {
            senderId: userId1,
            receiverId: userId2,
          },
          {
            senderId: userId2,
            receiverId: userId1,
          },
        ],
      },
      orderBy: {
        createdAt: 'asc',
      },
      include: {
        sender: {
          include: {
            profile: true,
          },
        },
        receiver: {
          include: {
            profile: true,
          },
        },
      },
    });
  }

  async findUserConversations(userId: number) {
    // Check if user exists
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    // Get all unique users the user has had conversations with
    const sentMessages = await this.prisma.message.findMany({
      where: {
        senderId: userId,
      },
      select: {
        receiverId: true,
      },
      distinct: ['receiverId'],
    });

    const receivedMessages = await this.prisma.message.findMany({
      where: {
        receiverId: userId,
      },
      select: {
        senderId: true,
      },
      distinct: ['senderId'],
    });

    // Combine unique users
    const conversationUserIds = new Set<number>();
    sentMessages.forEach((message) => conversationUserIds.add(message.receiverId));
    receivedMessages.forEach((message) => conversationUserIds.add(message.senderId));

    // Get user details for each conversation
    const conversationUsers = await Promise.all(
      Array.from(conversationUserIds).map(async (otherId) => {
        const otherUser = await this.prisma.user.findUnique({
          where: { id: otherId },
          include: {
            profile: true,
          },
        });

        // Get the latest message
        const latestMessage = await this.prisma.message.findFirst({
          where: {
            OR: [
              {
                senderId: userId,
                receiverId: otherId,
              },
              {
                senderId: otherId,
                receiverId: userId,
              },
            ],
          },
          orderBy: {
            createdAt: 'desc',
          },
        });

        // Count unread messages
        const unreadCount = await this.prisma.message.count({
          where: {
            senderId: otherId,
            receiverId: userId,
            isRead: false,
          },
        });

        // Remove sensitive information
        const { password, ...userWithoutPassword } = otherUser as any;

        return {
          user: userWithoutPassword,
          latestMessage,
          unreadCount,
        };
      }),
    );

    return conversationUsers;
  }

  async markAsRead(messageId: number, updateMessageReadStatusDto: UpdateMessageReadStatusDto) {
    // Check if message exists
    const message = await this.prisma.message.findUnique({
      where: { id: messageId },
    });

    if (!message) {
      throw new NotFoundException(`Message with ID ${messageId} not found`);
    }

    // Update message read status
    return this.prisma.message.update({
      where: { id: messageId },
      data: {
        isRead: updateMessageReadStatusDto.isRead,
      },
    });
  }

  async markAllAsRead(senderId: number, receiverId: number) {
    // Check if both users exist
    const sender = await this.prisma.user.findUnique({
      where: { id: senderId },
    });

    if (!sender) {
      throw new NotFoundException(`User with ID ${senderId} not found`);
    }

    const receiver = await this.prisma.user.findUnique({
      where: { id: receiverId },
    });

    if (!receiver) {
      throw new NotFoundException(`User with ID ${receiverId} not found`);
    }

    // Mark all messages as read
    await this.prisma.message.updateMany({
      where: {
        senderId,
        receiverId,
        isRead: false,
      },
      data: {
        isRead: true,
      },
    });

    return { message: `All messages from user ${senderId} to user ${receiverId} marked as read` };
  }
} 