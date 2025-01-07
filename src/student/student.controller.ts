import { Controller } from '@nestjs/common';

@Controller('student')
export class StudentController {}
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async create(student: Partial<Student>): Promise<Student> {
    return this.studentRepository.save(student);
  }
  async update(id: number, updateData: Partial<Student>): Promise<Student> {
    await this.studentRepository.update(id, updateData);
    return this.studentRepository.findOneBy({ id });
  }

}