import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { MongooseModule } from "@nestjs/mongoose";
import { Course, CourseSchema } from "./schema/course.schema";
import { CourseController } from "./course.controller";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Course.name, schema: CourseSchema }]),
  ],
  providers: [CourseService],
  controllers:[CourseController]
})
export class CourseModule {}
