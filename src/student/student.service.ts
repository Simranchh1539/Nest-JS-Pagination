import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Student } from "./schema/student.schema";
import { Model } from "mongoose";
import { StudentRequestDto } from "./dto/create-student.dto";
import { checkNotFoundError, paginateQuery } from "src/utils/common/common-functions";

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student.name) private readonly studentModel: Model<Student>,
  ) {}

  async createStudent(studentRequestData: StudentRequestDto): Promise<Student> {
    const studentData = new this.studentModel(studentRequestData);
    return studentData.save();
  }

  async findAllStudents(
    page: number,
    pageSize?: number,
  ): Promise<{ studentsData: Student[]; total: number }> {
    let query = this.studentModel.find().populate('courses');

    query = paginateQuery(query,page,pageSize)

    const studentsData = await query.lean();
    const total = await this.studentModel.countDocuments();

    return { studentsData, total };
  }

  async findStudentById(id: string): Promise<Student> {
    const studentData = await this.studentModel
      .findById(id)
      .populate('courses')
      .lean();
    checkNotFoundError(studentData,'Student',id)
    return studentData as Student;
  }

  async updateStudent(id: string, studentRequestData: StudentRequestDto): Promise<Student> {
    const updatedStudentData = await this.studentModel
      .findByIdAndUpdate(id, studentRequestData, { new: true, runValidators: true })
      .populate('courses')
      .lean();
    checkNotFoundError(updatedStudentData,'Student',id)
    return updatedStudentData as Student;
  }

  async deleteStudent(id: string): Promise<void> {
    const deletedStudentData = await this.studentModel.findByIdAndDelete(id).lean();
    checkNotFoundError(deletedStudentData,'Student',id)
  }
}
