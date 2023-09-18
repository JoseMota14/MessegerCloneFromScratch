import { Expose, plainToClass } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { People } from './people.entity';

export class ObtainPeopleDto {
  @Expose()
  @IsNotEmpty()
  name: string;

  @Expose()
  @IsNotEmpty()
  email: string;

  static fromUser(people: People): ObtainPeopleDto {
    return plainToClass(ObtainPeopleDto, people, {
      excludeExtraneousValues: true,
    });
  }
}
