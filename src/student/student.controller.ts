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
 
  @Get()  
  async findAll(): Promise<Student[]> {
    const students = await this.studentService.findAll();
    if (!students || students.length === 0) {
      throw new NotFoundException('No students found');
    }
    return students;
  }
  @Get(':id')  
  async findOne(@Param('id') id: number): Promise<Student> {
    const student = await this.studentService.findOne(id);
    if (!student) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }
    return student;
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
