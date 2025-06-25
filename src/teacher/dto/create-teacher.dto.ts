import { IsOptional, IsString } from 'class-validator';

export class TeacherRequestDto {
  @IsString()
  name: string;

  @IsString()
  department: string;

  @IsOptional()
  @IsString()
  qualification?: string;
}
