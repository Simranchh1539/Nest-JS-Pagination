import { Expose, Transform } from 'class-transformer';

export class StudentResponseDto {
  @Expose({ name: '_id' })
  @Transform(({ obj }) => obj._id?.toString())
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
  courses?: any[];
}
