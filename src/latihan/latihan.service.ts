import { Injectable } from '@nestjs/common';
import { CreateLatihanDto } from './dto/create-latihan.dto';
import { UpdateLatihanDto } from './dto/update-latihan.dto';

@Injectable()
export class LatihanService {
  latihan : any[] = [];
  async create(data) {
    return this.latihan;
  }

  async findAll() {
    return `This action returns all latihan`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} latihan`;
  }

  async update(id: number, updateLatihanDto: UpdateLatihanDto) {
    return `This action updates a #${id} latihan`;
  }

  async remove(id: number) {
    return `This action removes a #${id} latihan`;
  }
}
