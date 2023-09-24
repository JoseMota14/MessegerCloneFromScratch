import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ConversationService {
  constructor(private readonly prisma: PrismaClient) {}
  async getConversation(): Promise<any[]> {
    return await [];
  }
}
