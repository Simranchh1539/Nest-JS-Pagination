import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Teacher } from "./schema/teacher.schema";
import { Model } from "mongoose";
import { TeacherRequestDto } from "./dto/create-teacher.dto";

@Injectable()
export class TeacherService {
  constructor(
    @InjectModel(Teacher.name) private readonly teacherModel: Model<Teacher>,
  ) {}

  async createTeacher(teacherRequestData: TeacherRequestDto): Promise<Teacher> {
    const newTeacherData = new this.teacherModel(teacherRequestData);
    return await newTeacherData.save();
  }

  async findAllTeachers(): Promise<Teacher[]> {
    return await this.teacherModel.find().lean();
  }

  async findTeacher(id: string): Promise<Teacher> {
    const teacherData = await this.teacherModel.findById(id).lean();
    if (!teacherData) throw new NotFoundException(`Teacher with ${id} is not found`);
    return teacherData;
  }

  async updateTeacher(id: string, teacherRequestData: TeacherRequestDto): Promise<Teacher> {
    const teacherUpdatedData = await this.teacherModel
      .findByIdAndUpdate(id, teacherRequestData, {
        new: true,
        runValidators: true,
      })
      .exec();
    if (!teacherUpdatedData) throw new NotFoundException(`Teacher with id ${id} is not found`);
    return teacherUpdatedData;
  }

  async deleteTeacher(id: string): Promise<void> {
    const deletedTeacher = await this.teacherModel.findByIdAndDelete(id).lean();
    if (!deletedTeacher) throw new NotFoundException(`Teacher with id ${id} is not found`);
  }
}
