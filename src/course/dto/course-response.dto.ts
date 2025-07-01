import { Expose, Transform, Type } from 'class-transformer';
import { TeacherResponseDto } from "src/teacher/dto/teacher-response.dto";


export class CourseResponseDto {
  @Expose({ name: '_id' })
  @Transform(({ obj }) => obj._id?.toString())
  id: string;

  @Expose()
  title: string;

  @Expose()
  description: string;

  @Expose({ name: 'duration' })
  courseDuration?: string;

  @Expose({ name: 'level' })
  courseLevel?: string;

  @Expose()
  @Type(() => TeacherResponseDto)
  teacher: TeacherResponseDto;
}
