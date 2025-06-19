import { Expose } from 'class-transformer';

export class StudentResponseDto {
  @Expose()
  _id: string;

  @Expose()
  name: string;

  @Expose()
  age: number;

  @Expose()
  email: string;

  @Expose({ name: 'fatherName' })
  father_name?: string;

  @Expose()
  courses?: any[];
}
