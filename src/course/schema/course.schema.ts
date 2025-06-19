import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Teacher } from "../../teacher/schema/teacher.schema";

@Schema()
export class Course extends Document {
  @Prop({ required: true })
  title: string;

  @Prop()
  description?: string;

  @Prop()
  duration?: string;

  @Prop()
  level:string;

  @Prop({ type: Types.ObjectId, ref: 'Teacher' })
  teacher: Teacher;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
