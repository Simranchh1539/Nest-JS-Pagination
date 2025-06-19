import { IsEmail, IsOptional, IsString, IsArray, IsMongoId, IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';

export class StudentDto {
  @IsString()
  name: string;

  @IsNumber()
  age: number;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  @Transform(({ obj }) => obj.father_name)
  fatherName?: string;

  @IsOptional()
  @IsArray()
  @IsMongoId({ each: true })
  @Transform(({ obj }) => obj.course_ids)
  courses?: string[];
}
