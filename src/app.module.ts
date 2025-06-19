import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { CourseModule } from './course/course.module';
import { TeacherModule } from './teacher/teacher.module';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/nest-pagination-task1'), StudentModule, CourseModule, TeacherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
