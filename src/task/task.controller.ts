import { CreateTaskDTO } from './dto/create-task.dto';
import { UpdateTaskDTO } from './dto/update-task.dto';
import { TaskService } from './task.service';
import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Post()
  async createTask(@Body() body: CreateTaskDTO) {
    return await this.taskService.createTask(body);
  }

  @Get()
  async getAllTasks() {
    return await this.taskService.getAllTasks();
  }

  @Get('/:task_id')
  async getTaskById(@Param('task_id') taskId) {
    return this.taskService.getTaskById(taskId);
  }

  @Patch('/:task_id')
  async updateTaskById(@Param('task_id') taskId, @Body() body: UpdateTaskDTO) {
    return await this.taskService.updateTaskById(taskId, body);
  }
  @Delete('/:task_id')
  async deleteTaskById(@Param('task_id') taskId) {
    return await this.taskService.deleteTaskById(taskId);
  }
}
