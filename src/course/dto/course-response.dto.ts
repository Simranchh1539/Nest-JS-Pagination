import { Expose } from 'class-transformer';


export class CourseResponseDto {
  @Expose({ name: '_id' })
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
  teacher: any;
}
