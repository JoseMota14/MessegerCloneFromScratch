import { Conversation } from '@prisma/client';
import { Expose, plainToClass } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class ConversationDTO {
  @Expose()
  @IsNotEmpty()
  name: string;

  @Expose()
  @IsNotEmpty()
  email: string;

  static fromUser(people: Conversation): ConversationDTO {
    return plainToClass(ConversationDTO, people, {
      excludeExtraneousValues: true,
    });
  }
}
