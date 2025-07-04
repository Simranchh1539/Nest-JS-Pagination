import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StudentRequestDto } from "./dto/create-student.dto";
import { StudentService } from "./student.service";
import { StudentResponseDto } from "./dto/student-response.dto";
import { transformResponse } from "src/utils/common/common-functions";

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async createStudent(@Body() studentRequestData: StudentRequestDto) {
    const createdStudentData = await this.studentService.createStudent(studentRequestData);
    return transformResponse(StudentResponseDto,createdStudentData)
  }

  @Get()
  async findAllStudents() {
    const studentsData = await this.studentService.findAllStudents();
    return transformResponse(StudentResponseDto,studentsData)
  }

  @Get(':id')
  async findStudent(@Param('id') id: string) {
    const studentData = await this.studentService.findStudentById(id);
    return transformResponse(StudentResponseDto,studentData);
  }

  @Put(':id')
  async updateStudent(@Param('id') id: string, @Body() studentRequestData: StudentRequestDto) {
    const updatedStudentData = await this.studentService.updateStudent(id, studentRequestData);
    return transformResponse(StudentResponseDto,updatedStudentData);
  }

  @Delete(':id')
  async deleteStudent(@Param('id') id: string) {
    await this.studentService.deleteStudent(id);
    return { message: 'Student deleted successfully' };
  }
}
