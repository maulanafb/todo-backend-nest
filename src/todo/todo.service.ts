import {
  HttpStatus,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { REQUEST } from '@nestjs/core';
import { Prisma } from '@prisma/client';

@Injectable()
export class TodoService {
  constructor(
    private prisma: PrismaService,
    @Inject(REQUEST) private req: any,
  ) {}
  async create(data: CreateTodoDto) {
    data.userId = this.req.user.id;
    const createData = await this.prisma.todo.create({
      data: data,
    });
    return {
      statusCode: HttpStatus.CREATED,
      data: createData,
    };
  }

  async findAll() {
    const dataTask = await this.prisma.todo.findMany({
      where: {
        userId: this.req.user.id,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
    return {
      statusCode: 200,
      data: dataTask,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }
  async update(id: number, data: UpdateTodoDto) {
    try {
      const updatedTodo = await this.prisma.todo.update({
        data: data,
        where: {
          id: id,
        },
      });
      return {
        statusCode: 200,
        data: updatedTodo,
      };
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(`Todo with ID ${id} not found`);
        }
      }
      throw new Error('Failed to update Todo.');
    }
  }

  async remove(id: number) {
    try {
      const remove = await this.prisma.todo.delete({
        where: {
          id: id,
          userId: this.req.user.id,
        },
      });
      return {
        statusCode: 200,
        data: remove,
        message: 'Task deleted successfully',
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
