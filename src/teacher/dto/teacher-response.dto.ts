import { Expose } from 'class-transformer';

export class TeacherResponseDto {
  @Expose({ name: '_id' })
  id: string;

  @Expose()
  name: string;

  @Expose()
  department: string;

  @Expose()
  qualification?: string;
}
