import { IsString, IsOptional, IsMongoId } from 'class-validator';
import { Expose } from 'class-transformer';

export class CourseRequestDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  @Expose({ name: 'courseDuration' })
  duration?: string;

  @IsOptional()
  @IsString()
  @Expose({ name: 'courseLevel' })
  level?: string;

  @IsOptional()
  @IsMongoId()
  @Expose({ name: 'teacherId' })
  teacher: string;
}
