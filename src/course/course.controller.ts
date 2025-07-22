import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseRequestDto } from './dto/create-course.dto';
import { CourseResponseDto } from './dto/course-response.dto';
import { checkPaginationExist, paginationResponse, transformResponse } from 'src/utils/common/common-functions';
import { PaginationDetailsInput } from 'src/utils/interfaces/interfaces';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post()
  async createCourse(@Body() courseRequestData: CourseRequestDto) {
    const courseData = await this.courseService.createCourse(courseRequestData);
    return transformResponse(CourseResponseDto,courseData)
  }

  @Get()
  async findAllCourses(@Query() query: PaginationDetailsInput) {
    const { page, pageSize, hasPagination } = checkPaginationExist(query)

    const { coursesData, total } = await this.courseService.findAllCourses(
      page,
      pageSize,
    )

    const transformedData = transformResponse(CourseResponseDto, coursesData)

    return paginationResponse(
      transformedData,
      total,
      page,
      pageSize,
      hasPagination,
    )
  }

  @Get(':id')
  async findCourse(@Param('id') id: string) {
    const courseData = this.courseService.findCourseById(id);
    return transformResponse(CourseResponseDto, courseData)
  }

  @Put(':id')
  async updateCourse(
    @Param('id') id: string,
    @Body() courseRequestData: CourseRequestDto,
  ) {
    const updatedCourseData = this.courseService.updateCourse(id, courseRequestData);
    return transformResponse(CourseResponseDto, updatedCourseData)
  }

  @Delete(':id')
  async deleteCourse(@Param('id') id: string) {
    await this.courseService.deleteCourse(id);
    return { message: 'Course deleted successfully' };
  }
}
