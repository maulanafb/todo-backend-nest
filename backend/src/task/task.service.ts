import {
  Injectable,
  NotFoundException,
  Inject,
  HttpStatus,
} from '@nestjs/common';
import { CreateTaskDTO } from './dto/create-task.dto';
import { UpdateTaskDTO } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { REQUEST } from '@nestjs/core';

@Injectable()
export class TaskService {
  constructor(
    private prisma: PrismaService,
    @Inject(REQUEST) private req: any,
  ) {}
  async createTask(data: CreateTaskDTO) {
    data.id_user = this.req.user.id;
    const createData = await this.prisma.tasks.create({
      data: data,
    });
    return {
      statusCode: HttpStatus.CREATED,
      data: createData,
    };
  }
  async getAllTasks() {
    const dataTask = await this.prisma.tasks.findMany({
      where: {
        id_user: this.req.user.id,
      },
      include: {
        users: {
          select: {
            id: true,
            name: true,
            avatar: true,
            email: true,
          },
        },
      },
    });
    return {
      statusCode: 200,
      data: dataTask,
    };
  }
  async getTaskById(task_id: number) {
    const task = await this.prisma.tasks.findFirst({
      where: {
        id: task_id,
        id_user: this.req.user.id,
      },
    });
    if (!task) {
      throw new NotFoundException(`Task with ID ${task_id} not found`);
    }
    return task;
  }
  async updateTaskById(task_id: number, data: UpdateTaskDTO) {
    try {
      data.id_user = this.req.user.id;
      const updatedTask = await this.prisma.tasks.update({
        data: data,
        where: {
          id: task_id,
        },
      });
      return {
        statusCode: 200,
        data: updatedTask,
      };
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(`Task with ID ${task_id} not found`);
        }
      }
      throw new Error('Failed to update task.');
    }
  }
  async deleteTaskById(task_id: number) {
    try {
      const deleteTaskById = await this.prisma.tasks.delete({
        where: {
          id: task_id,
          id_user: this.req.user.id,
        },
      });
      return {
        statusCode: 200,
        data: deleteTaskById,
        message: 'Task deleted successfully',
      };
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(`Task with ID ${task_id} not found`);
        }
      }
      throw new Error('Failed to update task.');
    }
  }
}
