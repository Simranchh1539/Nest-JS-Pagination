import { Expose, Type } from 'class-transformer';
import { TransformMongoId } from "src/utils/decorators/custom.decorators";
import { CourseResponseDto } from "src/course/dto/course-response.dto";

export class StudentResponseDto {
  @Expose({ name: '_id' })
  @TransformMongoId()
  id: string;

  @Expose()
  name: string;

  @Expose()
  age: number;

  @Expose()
  email: string;

  @Expose()
  fatherName?: string;

  @Expose()
  @Type(() => CourseResponseDto)
  courses?: any[];
}
