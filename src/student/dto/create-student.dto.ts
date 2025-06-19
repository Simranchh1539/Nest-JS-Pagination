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
  fatherName?: string;

  @IsOptional()
  @IsArray()
  @IsMongoId({ each: true })
  @Transform(({ obj }) => obj.courseIds)
  courses?: string[];
}
