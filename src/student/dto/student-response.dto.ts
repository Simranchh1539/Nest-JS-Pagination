import { Expose } from 'class-transformer';

export class StudentResponseDto {
  @Expose({ name: '_id' })
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
