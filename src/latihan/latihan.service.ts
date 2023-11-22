import { Injectable } from '@nestjs/common';

@Injectable()
export class LatihanService {
  getLatihan(): object {
    return {
      message: 'Latihan',
    };
  }
}
