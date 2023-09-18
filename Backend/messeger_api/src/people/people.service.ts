import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

import { ObtainPeopleDto } from './people.dto';
import { People } from './people.entity';

@Injectable()
export class PeopleService {
  constructor(private readonly prisma: PrismaClient) {}

  async findAll(): Promise<ObtainPeopleDto[]> {
    const people = await this.prisma.user.findMany({
      select: {
        conversationIds: false,
        seenMessageIds: false,
        name: true,
        email: true,
        hashedPassword: true,
      },
    });

    const peopleDto = this.usersToUserDTOs(people);
    return peopleDto;
  }

  usersToUserDTOs(people: People[]): ObtainPeopleDto[] {
    return people.map((people) => ObtainPeopleDto.fromUser(people));
  }
}
