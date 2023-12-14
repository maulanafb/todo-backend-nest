import { Test, TestingModule } from '@nestjs/testing';
import { LatihanController } from './latihan.controller';
import { LatihanService } from './latihan.service';

describe('LatihanController', () => {
  let controller: LatihanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LatihanController],
      providers: [LatihanService],
    }).compile();

    controller = module.get<LatihanController>(LatihanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
