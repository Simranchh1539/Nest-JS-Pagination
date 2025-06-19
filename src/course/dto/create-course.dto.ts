import { IsString, IsOptional, IsMongoId } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateCourseDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  @Transform(({ obj }) => obj.course_duration)
  duration?: string;

  @IsOptional()
  @IsString()
  @Transform(({ obj }) => obj.course_level)
  level?: string;

  @IsMongoId()
  @Transform(({ obj }) => obj.teacher_id)
  teacher: string;
}
