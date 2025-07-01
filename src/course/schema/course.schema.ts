import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

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
  teacher: Types.ObjectId;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
