import { Expose } from 'class-transformer';
import { TransformMongoId } from "src/utils/decorators/custom.decorators";

export class TeacherResponseDto {
  @Expose({ name: '_id' })
  @TransformMongoId()
  id: string;

  @Expose()
  name: string;

  @Expose()
  department: string;

  @Expose()
  qualification?: string;
}
