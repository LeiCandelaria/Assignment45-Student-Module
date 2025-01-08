import {Controller, Get, Post,Put,Delete,Body,Param,NotFoundException} from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './entities/student.entity';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

//send//
 @Post()
  create(@Body() student: Partial<Student>) {
    return this.studentService.create(student);
  }
 
//fetch one by id//  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Student> {
    try {
      return await this.studentService.findOne(id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

//remove/delete//
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return await this.studentService.delete(id);
}
//patch//
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() student: Partial<Student>,
  ): Promise<Student> {
    return await this.studentService.update(id, student);
} 

  }
