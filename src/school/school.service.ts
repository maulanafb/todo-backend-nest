import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class SchoolService {
  constructor(private prisma: PrismaService) { }
  
  async create(schoolData:CreateSchoolDto) {
    const createSchool = await this.prisma.schools.create({
      data: schoolData
    });
    return {
      statusCode: HttpStatus.CREATED,
      data:createSchool
    }
  }

  async findAll() {
    const dataSchool = await this.prisma.schools.findMany()

    return {
      statusCode: HttpStatus.OK,
      data:dataSchool
    }
  }

  async findOne(id: number) {
    const school = await this.prisma.schools.findFirst({
      where: {id}
    });

    if (!school) { 
      throw new HttpException("Not Found",HttpStatus.NOT_FOUND)
    }
    return {
      statusCode: HttpStatus.OK,
      data:school
    }
  }

  async update(id: number, updateSchoolDto: UpdateSchoolDto) {
    const updateSchool = await this.prisma.schools.update({
      where: { id },
      data:updateSchoolDto
    });
    return {
      statusCode: HttpStatus.OK,
      data:updateSchool
    }
  }

  async remove(id: number) {
    try {
      const deleteSchool = await this.prisma.schools.delete({
        where: { id },
      });

      if (!deleteSchool) {
        // Jika Prisma mengembalikan null atau undefined, berarti data tidak ditemukan
        throw new HttpException('Data sekolah tidak ditemukan', HttpStatus.NOT_FOUND);
      }
      return {
        statusCode: HttpStatus.OK,
        data: deleteSchool,
      };
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(`Task with ID ${id} not found`);
        }
      }
      throw new Error('Failed to update task.');
    }
  }
}
