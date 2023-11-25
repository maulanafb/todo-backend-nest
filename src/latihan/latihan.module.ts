import { Module } from '@nestjs/common';
import { LatihanService } from './latihan.service';
import { LatihanController } from './latihan.controller';

@Module({
  controllers: [LatihanController],
  providers: [LatihanService],
})
export class LatihanModule {}
