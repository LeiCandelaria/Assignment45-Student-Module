  import {Controller, Get, Post,Put,Delete,Body,Param,} from '@nestjs/common';
  import { StudentService } from './student.service';
  import { Student } from './entities/student.entity';

  @Controller('students')
  export class StudentController {
    constructor(private readonly studentService: StudentService) {}
   
    @Get()
    async findAll(): Promise<Student[]> {
      return await this.studentService.findAll();
   }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
      return await this.studentService.delete(id);
  }
    @Put(':id')
    async update(
      @Param('id') id: number,
      @Body() student: Partial<Student>,
    ): Promise<Student> {
      return await this.studentService.update(id, student);
  } 

    }
