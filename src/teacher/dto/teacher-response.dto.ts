import { Expose } from 'class-transformer';

export class TeacherResponseDto {
  @Expose()
  _id: string;

  @Expose()
  name: string;

  @Expose()
  department: string;

  @Expose()
  qualification?: string;
}
