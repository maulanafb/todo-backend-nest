import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LatihanService } from './latihan.service';
import { CreateLatihanDto } from './dto/create-latihan.dto';
import { UpdateLatihanDto } from './dto/update-latihan.dto';

@Controller('latihan')
export class LatihanController {
  constructor(private readonly latihanService: LatihanService) {}

  @Post()
  create(@Body() createLatihanDto: CreateLatihanDto) {
    return this.latihanService.create(createLatihanDto);
  }

  @Get()
  findAll() {
    return this.latihanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.latihanService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLatihanDto: UpdateLatihanDto) {
    return this.latihanService.update(+id, updateLatihanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.latihanService.remove(+id);
  }
}
