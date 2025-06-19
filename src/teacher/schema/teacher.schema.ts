import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Teacher extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  department: string;

  @Prop()
  qualification: string;
}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);
