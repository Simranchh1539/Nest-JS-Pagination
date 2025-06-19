import { IsOptional, IsString } from 'class-validator';

export class TeacherDto {
  @IsString()
  name: string;

  @IsString()
  department: string;

  @IsOptional()
  @IsString()
  qualification?: string;
}
