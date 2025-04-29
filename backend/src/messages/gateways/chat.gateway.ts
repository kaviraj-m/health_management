import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  ConnectedSocket,
  MessageBody,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger, UseGuards } from '@nestjs/common';
import { MessagesService } from '../messages.service';
import { CreateMessageDto } from '../dto/message.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { PrismaService } from '../../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

interface CustomSocket extends Socket {
  user?: any;
}

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  namespace: 'chat',
})
export class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  private logger = new Logger('ChatGateway');
  private userSocketMap = new Map<number, string>();

  constructor(
    private readonly messagesService: MessagesService,
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  afterInit(server: Server) {
    this.logger.log('Chat Gateway initialized');
  }

  async handleConnection(socket: CustomSocket) {
    try {
      // Authenticate user from token
      const token = socket.handshake.auth.token || socket.handshake.headers.authorization;
      
      if (!token) {
        socket.disconnect();
        return;
      }
      
      // Verify JWT
      const payload = this.jwtService.verify(token.replace('Bearer ', ''));
      const userId = payload.sub;
      
      // Get user details
      const user = await this.prisma.user.findUnique({
        where: { id: userId },
        include: { profile: true },
      });
      
      if (!user) {
        socket.disconnect();
        return;
      }
      
      // Attach user to socket
      socket.user = user;
      
      // Store socket id for the user
      this.userSocketMap.set(user.id, socket.id);
      
      // Join a personal room for receiving messages
      socket.join(`user_${user.id}`);
      
      this.logger.log(`Client connected: ${socket.id}, User: ${user.email}`);
    } catch (error) {
      this.logger.error(`Connection error: ${error.message}`);
      socket.disconnect();
    }
  }

  handleDisconnect(socket: CustomSocket) {
    // Remove from user socket map
    if (socket.user) {
      this.userSocketMap.delete(socket.user.id);
    }
    
    this.logger.log(`Client disconnected: ${socket.id}`);
  }

  @SubscribeMessage('send_message')
  async handleMessage(
    @ConnectedSocket() socket: CustomSocket,
    @MessageBody() createMessageDto: CreateMessageDto,
  ) {
    try {
      if (!socket.user) {
        return { success: false, error: 'Unauthorized' };
      }

      const senderId = socket.user.id;
      const { receiverId } = createMessageDto;
      
      // Save message in database
      const message = await this.messagesService.create(senderId, createMessageDto);
      
      // Emit message to receiver
      const receiverSocketId = this.userSocketMap.get(receiverId);
      
      if (receiverSocketId) {
        this.server.to(`user_${receiverId}`).emit('new_message', {
          ...message,
          sender: {
            ...message.sender,
            password: undefined,
          },
          receiver: {
            ...message.receiver,
            password: undefined,
          },
        });
      }
      
      return { success: true, message };
    } catch (error) {
      this.logger.error(`Error sending message: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  @SubscribeMessage('join_video_call')
  handleJoinVideoCall(
    @ConnectedSocket() socket: CustomSocket,
    @MessageBody() data: { receiverId: number; roomId: string },
  ) {
    try {
      if (!socket.user) {
        return { success: false, error: 'Unauthorized' };
      }

      const { receiverId, roomId } = data;
      const senderId = socket.user.id;
      
      // Join room for video call
      socket.join(roomId);
      
      // Notify the receiver about the incoming call
      const receiverSocketId = this.userSocketMap.get(receiverId);
      
      if (receiverSocketId) {
        this.server.to(`user_${receiverId}`).emit('incoming_call', {
          roomId,
          caller: {
            id: senderId,
            name: `${socket.user.profile.firstName} ${socket.user.profile.lastName}`,
          },
        });
      }
      
      return { success: true, message: 'Joined video call room' };
    } catch (error) {
      this.logger.error(`Error joining video call: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  @SubscribeMessage('answer_call')
  handleAnswerCall(
    @ConnectedSocket() socket: CustomSocket,
    @MessageBody() data: { roomId: string },
  ) {
    try {
      if (!socket.user) {
        return { success: false, error: 'Unauthorized' };
      }

      const { roomId } = data;
      
      // Join room for video call
      socket.join(roomId);
      
      // Notify everyone in the room that the call was answered
      this.server.to(roomId).emit('call_answered', {
        user: {
          id: socket.user.id,
          name: `${socket.user.profile.firstName} ${socket.user.profile.lastName}`,
        },
      });
      
      return { success: true, message: 'Call answered' };
    } catch (error) {
      this.logger.error(`Error answering call: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  @SubscribeMessage('end_call')
  handleEndCall(
    @ConnectedSocket() socket: CustomSocket,
    @MessageBody() data: { roomId: string },
  ) {
    try {
      if (!socket.user) {
        return { success: false, error: 'Unauthorized' };
      }

      const { roomId } = data;
      
      // Notify everyone in the room that the call ended
      this.server.to(roomId).emit('call_ended', {
        user: {
          id: socket.user.id,
          name: `${socket.user.profile.firstName} ${socket.user.profile.lastName}`,
        },
      });
      
      // Leave the room
      socket.leave(roomId);
      
      return { success: true, message: 'Call ended' };
    } catch (error) {
      this.logger.error(`Error ending call: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  @SubscribeMessage('ice_candidate')
  handleIceCandidate(
    @ConnectedSocket() socket: CustomSocket,
    @MessageBody() data: { roomId: string; candidate: any },
  ) {
    try {
      if (!socket.user) {
        return { success: false, error: 'Unauthorized' };
      }

      const { roomId, candidate } = data;
      
      // Broadcast ICE candidate to everyone in the room except sender
      socket.to(roomId).emit('ice_candidate', {
        userId: socket.user.id,
        candidate,
      });
      
      return { success: true };
    } catch (error) {
      this.logger.error(`Error with ICE candidate: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  @SubscribeMessage('offer')
  handleOffer(
    @ConnectedSocket() socket: CustomSocket,
    @MessageBody() data: { roomId: string; offer: any },
  ) {
    try {
      if (!socket.user) {
        return { success: false, error: 'Unauthorized' };
      }

      const { roomId, offer } = data;
      
      // Broadcast offer to everyone in the room except sender
      socket.to(roomId).emit('offer', {
        userId: socket.user.id,
        offer,
      });
      
      return { success: true };
    } catch (error) {
      this.logger.error(`Error with offer: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  @SubscribeMessage('answer')
  handleAnswer(
    @ConnectedSocket() socket: CustomSocket,
    @MessageBody() data: { roomId: string; answer: any },
  ) {
    try {
      if (!socket.user) {
        return { success: false, error: 'Unauthorized' };
      }

      const { roomId, answer } = data;
      
      // Broadcast answer to everyone in the room except sender
      socket.to(roomId).emit('answer', {
        userId: socket.user.id,
        answer,
      });
      
      return { success: true };
    } catch (error) {
      this.logger.error(`Error with answer: ${error.message}`);
      return { success: false, error: error.message };
    }
  }
} 