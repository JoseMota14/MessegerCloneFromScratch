import { Module } from '@nestjs/common';
import { ConversationModule } from './conversation/conversation.module';
import { PeopleModule } from './people/people.module';

@Module({
  imports: [PeopleModule, ConversationModule],
})
export class AppModule {}
