import { IsOptional, IsString } from 'class-validator';

export class UpdateTaskDTO {
  @IsOptional()
  @IsString()
  task_name: string;

  @IsString()
  task_description: string;

  id_user: number;
}
