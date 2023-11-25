import { AuthGuard } from 'src/auth/auth.guard';
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
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Task')
@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @UseGuards(AuthGuard)
  @Post()
  async createTask(@Body() body: CreateTaskDTO) {
    return await this.taskService.createTask(body);
  }

  @UseGuards(AuthGuard)
  @Get()
  async getAllTasks() {
    return await this.taskService.getAllTasks();
  }

  @UseGuards(AuthGuard)
  @Get('/:task_id')
  async getTaskById(@Param('task_id') taskId) {
    return this.taskService.getTaskById(+taskId);
  }

  @UseGuards(AuthGuard)
  @Patch('/:task_id')
  async updateTaskById(@Param('task_id') taskId, @Body() body: UpdateTaskDTO) {
    return await this.taskService.updateTaskById(+taskId, body);
  }

  @UseGuards(AuthGuard)
  @Delete('/:task_id')
  async deleteTaskById(@Param('task_id') taskId) {
    return await this.taskService.deleteTaskById(+taskId);
  }
}
