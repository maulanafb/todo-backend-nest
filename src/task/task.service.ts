import { Injectable } from '@nestjs/common';
import { CreateTaskDTO } from './dto/create-task.dto';
import { tasks } from './data/tasks';
import { UpdateTaskDTO } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  async createTask(data: CreateTaskDTO) {
    return {
      statusCode: 200,
      data,
    };
  }

  async getAllTasks() {
    return {
      statusCode: 200,
      data: tasks,
    };
  }

  async getTaskById(id: number) {
    return {
      statusCode: 200,
      data: tasks.find((task) => task.task_id == id),
    };
  }
  async updateTaskById(task_id: number, data: UpdateTaskDTO) {
    return {
      statusCode: 200,
      data: data,
    };
  }
  async deleteTaskById(task_id: number) {
    return {
      statusCode: 200,
      data: tasks.find((task) => task.task_id == task_id),
      message: `Task ${task_id} deleted successfully`,
    };
  }
}
