import { Controller, Post, Body,Get,Patch,Param,Delete} from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './entities/student.entity';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  create(@Body() student: Partial<Student>) {
    return this.studentService.create(student);
  }
  @Get()
findAll() {
  return this.studentService.findAll();
}
@Patch(':id')
update(@Param('id') id: number, @Body() updateData: Partial<Student>) {
  return this.studentService.update(id, updateData);
}
@Delete(':id')
remove(@Param('id') id: number) {
  return this.studentService.remove(id);
}

} 