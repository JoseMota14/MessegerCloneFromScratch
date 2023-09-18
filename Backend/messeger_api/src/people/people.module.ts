import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { PrismaClient } from '@prisma/client';
import { PeopleController } from './people.controller';
import { PeopleService } from './people.service';

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [PeopleController],
  providers: [PeopleService, PrismaClient],
})
export class PeopleModule {}
