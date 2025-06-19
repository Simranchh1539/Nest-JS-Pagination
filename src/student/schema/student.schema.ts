import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Course } from "../../course/schema/course.schema";


@Schema()
export class Student extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  age: number;

  @Prop({ required: true })
  email: string;

  @Prop()
  fatherName?: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Course' }] })
  courses: Course[];
}

export const StudentSchema = SchemaFactory.createForClass(Student);
