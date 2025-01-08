import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
    async create(student: Partial<Student>): Promise<Student> {
        try {
          return await this.studentRepository.save(student);
        } catch (error) {
          throw new Error(`Failed to create student: ${error.message}`);
        }
      }
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

async findAll(): Promise<Student[]> {
    return await this.studentRepository.find();
}

  async delete(id: number): Promise<void> {
    await this.studentRepository.delete(id);
}
  async update(id: number, student: Partial<Student>): Promise<Student> {
    await this.studentRepository.update(id, student);
    return await this.studentRepository.findOne({ where: { id } });
}

  }