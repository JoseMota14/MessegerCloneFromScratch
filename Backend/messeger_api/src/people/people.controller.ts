import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Res,
  ValidationPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { LoginDto, ObtainPeopleDto } from './people.dto';
import { PeopleService } from './people.service';

@Controller('people')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Get('')
  getAllPeple(): Promise<ObtainPeopleDto[]> {
    return this.peopleService.findAll();
  }

  @Get('others/:email')
  getOthers(@Param('email') email: string): Promise<ObtainPeopleDto[]> {
    return this.peopleService.findOthers(email);
  }

  @Get('/:email')
  getByEmail(@Param('email') email: string): Promise<ObtainPeopleDto> {
    return this.peopleService.findByEmail(email);
  }

  @Post('login')
  async login(
    @Body(new ValidationPipe()) loginDto: LoginDto,
    @Res() res: Response,
  ): Promise<any> {
    try {
      const resp = await this.peopleService.login(loginDto);
      if (resp === null) {
        res.status(HttpStatus.FORBIDDEN).json('No user');
      }
      res.status(HttpStatus.CREATED).json(resp);
      return resp;
    } catch (err) {
      throw new HttpException('Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
