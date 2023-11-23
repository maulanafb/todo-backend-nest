import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDTO {
  @IsNotEmpty()
  @IsString()
  task_name: string;

  @IsNotEmpty()
  @IsString()
  task_description: string;

  id_user: number;
}
