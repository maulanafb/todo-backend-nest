import { Controller, Get } from '@nestjs/common';
import { LatihanService } from './latihan.service';

@Controller('latihan')
export class LatihanController {
  constructor(private latihanService: LatihanService) {}
  @Get()
  getLatihan(): object {
    return this.latihanService.getLatihan();
  }
}
