import { Expose, Transform } from 'class-transformer';

export class TeacherResponseDto {
  @Expose({ name: '_id' })
  @Transform(({ obj }) => obj._id?.toString())
  id: string;

  @Expose()
  name: string;

  @Expose()
  department: string;

  @Expose()
  qualification?: string;
}
