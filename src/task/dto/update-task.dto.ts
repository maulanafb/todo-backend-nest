import { IsOptional, IsString } from 'class-validator';

export class UpdateTaskDTO {
  @IsOptional()
  @IsString()
  task_name: string;

  @IsOptional()
  @IsString()
  task_description: string;

  id_user: number;
}
