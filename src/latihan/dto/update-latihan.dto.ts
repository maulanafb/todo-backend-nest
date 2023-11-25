import { PartialType } from '@nestjs/swagger';
import { CreateLatihanDto } from './create-latihan.dto';

export class UpdateLatihanDto extends PartialType(CreateLatihanDto) {}
