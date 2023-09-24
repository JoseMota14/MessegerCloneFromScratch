import { Controller, Get } from '@nestjs/common';
import { ConversationService } from './conversation.service';

@Controller('conversation')
export class ConversationController {
  constructor(private readonly conversationService: ConversationService) {}

  @Get('')
  getOthers(): Promise<any[]> {
    return this.conversationService.getConversation();
  }
}
