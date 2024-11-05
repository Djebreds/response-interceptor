import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AppReadDTO } from './dtos/app-read.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): AppReadDTO {
    return this.appService.getHello();
  }
}
