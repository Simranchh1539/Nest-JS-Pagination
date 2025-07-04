import { IsEmail, IsOptional, IsString, IsArray, IsMongoId, IsNumber } from 'class-validator';
import { Expose } from 'class-transformer';
import { IsUniqueArray } from "src/utils/decorators/custom.decorators";

export class StudentRequestDto {
  @IsString()
  name: string;

  @IsNumber()
  age: number;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  fatherName?: string;

  @IsOptional()
  @IsArray()
  @IsMongoId({ each: true })
  @Expose({name:'courseIds'})
  @IsUniqueArray({ message: 'You’ve selected the same course more than once. Please ensure each course is only listed once.' })
  courses?: string[];
}
