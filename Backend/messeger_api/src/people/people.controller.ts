import { Controller, Get } from '@nestjs/common';
import { PeopleService } from './people.service';

@Controller('people')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Get()
  getHello(): string {
    return 'teste';
  }

  @Get('All')
  getAllPeple(): any {
    return this.peopleService.findAll();
  }
}
