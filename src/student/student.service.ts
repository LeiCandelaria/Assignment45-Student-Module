import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
    update(id: number, student: Partial<import("./entities/student.entity").Student>): import("./entities/student.entity").Student | PromiseLike<import("./entities/student.entity").Student> {
        throw new Error('Method not implemented.');
    }
    findAll(): import("./entities/student.entity").Student[] | PromiseLike<import("./entities/student.entity").Student[]> {
        throw new Error('Method not implemented.');
    }
    delete(id: number): void | PromiseLike<void> {
        throw new Error('Method not implemented.');
    }
}
