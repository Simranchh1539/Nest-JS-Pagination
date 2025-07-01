import { Expose, Type } from 'class-transformer';
import { TeacherResponseDto } from "src/teacher/dto/teacher-response.dto";
import { TransformMongoId } from "src/utils/decorators/custom.decorators";


export class CourseResponseDto {
  @Expose({ name: '_id' })
  @TransformMongoId()
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
