import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!ssss';
  }
  getHellos(): string {
    return 'Hellos';
  }
}
