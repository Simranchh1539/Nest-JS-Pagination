import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course } from './schema/course.schema';
import { CourseRequestDto } from './dto/create-course.dto';
import { checkNotFoundError } from 'src/utils/common/common-functions';

@Injectable()
export class CourseService {
  constructor(
    @InjectModel(Course.name) private readonly courseModel: Model<Course>,
  ) {}

  async createCourse(courseRequestData: CourseRequestDto): Promise<Course> {
    const createdCourseData = new this.courseModel(courseRequestData);
    return createdCourseData.save();
  }

  async findAllCourses(): Promise<Course[]> {
    return this.courseModel.find().populate('teacher').lean();
  }

  async findCourseById(id: string): Promise<Course> {
    const courseData = await this.courseModel
      .findById(id)
      .populate('teacher')
      .lean();
    checkNotFoundError(courseData, 'Course', id);
    return courseData as Course;
  }

  async updateCourse(id: string, courseRequestData: CourseRequestDto): Promise<Course> {
    const updatedCourseData = await this.courseModel
      .findByIdAndUpdate(id, courseRequestData, { new: true, runValidators: true })
      .populate('teacher')
      .lean();
    checkNotFoundError(updatedCourseData,'Course',id)
    return updatedCourseData as Course;
  }

  async deleteCourse(id: string): Promise<void> {
    const deletedCourseData = await this.courseModel.findByIdAndDelete(id).lean();
    checkNotFoundError(deletedCourseData,'Course',id)
  }
}
