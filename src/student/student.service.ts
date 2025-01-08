import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {
  create(student: Partial<Student>) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

async findAll(): Promise<Student[]> {
    return await this.studentRepository.find();
}

async findOne(id: number, student: Partial<Student>): Promise<Student> {
  await this.studentRepository.update(id, student);
  return await this.studentRepository.findOne({ where: { id } });
}

  async delete(id: number): Promise<void> {
    await this.studentRepository.delete(id);
}
  async update(id: number, student: Partial<Student>): Promise<Student> {
    await this.studentRepository.update(id, student);
    return await this.studentRepository.findOne({ where: { id } });
}

  }