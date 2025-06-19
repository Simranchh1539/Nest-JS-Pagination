import { Expose } from 'class-transformer';


export class CourseResponseDto {
  @Expose()
  _id: string;

  @Expose()
  title: string;

  @Expose()
  description: string;

  @Expose({ name: 'duration' })
  course_duration?: string;

  @Expose({ name: 'level' })
  course_level?: string;

  @Expose()
  teacher: any;
}
