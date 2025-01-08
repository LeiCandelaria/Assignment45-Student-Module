import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async create(student: Partial<Student>): Promise<Student> {
    try {
      return this.studentRepository.save(student);
    } catch (error) {
      throw new Error(`Failed to create student: ${error.message}`);
    }
  }

  async findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  async findOne(id: number): Promise<Student> {
    const student = await this.studentRepository.findOne({ where: { id } });
    if (!student) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }
    return student;
  }

  async update(id: number, student: Partial<Student>): Promise<Student> {
    await this.findOne(id); // this ensures student data exists
    await this.studentRepository.update(id, student);
    return this.findOne(id); // this returns the updated student data//
  }
  
  async delete(id: number): Promise<void> {
    const student = await this.findOne(id); // this ensures student data exists//
    await this.studentRepository.delete(student.id);
  }
}
