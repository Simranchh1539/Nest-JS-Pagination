import { IsString, IsOptional, IsMongoId } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateCourseDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  @Transform(({ obj }) => obj.courseDuration)
  duration?: string;

  @IsOptional()
  @IsString()
  @Transform(({ obj }) => obj.courseLevel)
  level?: string;

  @IsMongoId()
  @Transform(({ obj }) => obj.teacherId)
  teacher: string;
}
