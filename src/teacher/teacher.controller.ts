import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put
} from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherRequestDto } from './dto/create-teacher.dto';
import { plainToInstance } from 'class-transformer';
import { TeacherResponseDto } from './dto/teacher-response.dto';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Post()
  async createTeacher(@Body() teacherRequestData: TeacherRequestDto) {
    const teacherData = await this.teacherService.createTeacher(teacherRequestData);
    return plainToInstance(TeacherResponseDto, teacherData, {
      excludeExtraneousValues: true,
    });
  }

  @Get()
  async findAllTeachers() {
    const teachersData = await this.teacherService.findAllTeachers();
    return teachersData.map((teacherData) =>
      plainToInstance(TeacherResponseDto, teacherData, {
        excludeExtraneousValues: true,
      }),
    );
  }

  @Get(':id')
  async findTeacher(@Param('id') id: string) {
    const teacherData = await this.teacherService.findTeacher(id);
    return plainToInstance(TeacherResponseDto, teacherData, {
      excludeExtraneousValues: true,
    });
  }

  @Put(':id')
  async updateTeacher(@Param('id') id: string, @Body() teacherRequestData: TeacherRequestDto) {
    const teacherUpdatedData = await this.teacherService.updateTeacher(id, teacherRequestData);
    return plainToInstance(TeacherResponseDto, teacherUpdatedData, {
      excludeExtraneousValues: true,
    });
  }

  @Delete(':id')
  async deleteTeacher(@Param('id') id: string) {
    await this.teacherService.deleteTeacher(id);
    return { message: 'Teacher deleted successfully' };
  }
}
