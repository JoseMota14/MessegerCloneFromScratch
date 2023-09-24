import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ConversationController } from './conversation.controller';
import { ConversationService } from './conversation.service';

@Module({
  imports: [],
  controllers: [ConversationController],
  providers: [ConversationService, PrismaClient],
})
export class ConversationModule {}
