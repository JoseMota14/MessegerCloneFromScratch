import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { LoginDto, ObtainPeopleDto } from './people.dto';
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

  async findOthers(email: string): Promise<ObtainPeopleDto[]> {
    const people = await this.prisma.user.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      where: {
        NOT: {
          OR: [{ email: email }, { name: email }],
        },
      },
    });

    const peopleDto = this.usersToUserDTOs(people);
    return peopleDto;
  }

  async findByEmail(email: string): Promise<ObtainPeopleDto> {
    const people = await this.prisma.user.findFirst({
      where: {
        email: email as string,
      },
    });

    const peopleDto = ObtainPeopleDto.fromUser(people);
    return peopleDto;
  }

  usersToUserDTOs(people: People[]): ObtainPeopleDto[] {
    return people.map((people) => ObtainPeopleDto.fromUser(people));
  }

  async login(loginDto: LoginDto): Promise<any> {
    const user = await this.prisma.user.findFirst({
      where: {
        email: loginDto.email as string,
      },
    });

    if (!user) {
      return null;
    }
    if (user.hashedPassword !== loginDto.password) {
      return null;
    }
    return {
      username: user.name,
      token: new Date().getTime().toString() + loginDto.email,
    };
  }
}
