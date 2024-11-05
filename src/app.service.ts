import { Injectable } from '@nestjs/common';
import { AppReadDTO } from './dtos/app-read.dto';
import { plainToClass } from 'class-transformer';

@Injectable()
export class AppService {
  getHello(): AppReadDTO {
    const data = {
      id: 1,
      fullName: 'Dadang Jebred',
      phoneNumber: '1122334455',
    };

    return plainToClass(AppReadDTO, data);
  }
}
