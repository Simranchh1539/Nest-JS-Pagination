import { Expose } from 'class-transformer';
import { TransformMongoId } from "src/utils/decorators/custom.decorators";

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
  courses?: any[];
}
