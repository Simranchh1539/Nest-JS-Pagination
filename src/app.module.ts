import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentController } from './student/student.controller';
import { StudentService } from './student/student.service';
import { StudentModule } from './student/student.module';
import { CourseController } from './course/course.controller';
import { CourseModule } from './course/course.module';
import { TeacherService } from './teacher/teacher.service';
import { TeacherController } from './teacher/teacher.controller';
import { TeacherModule } from './teacher/teacher.module';

@Module({
  imports: [StudentModule, CourseModule, TeacherModule],
  controllers: [AppController, StudentController, CourseController, TeacherController],
  providers: [AppService, StudentService, TeacherService],
})
export class AppModule {}
