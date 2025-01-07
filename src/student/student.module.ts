import { Module } from '@nestjs/common';
import { TypeOrmModule} from '@nestjs/typeorm';
import { StudentService } from './student.service';
import { Student } from './entities/student.entity';
import { StudentController } from './student.controller';


@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  providers: [StudentService],
  controllers: [StudentController],
})
export class StudentModule {}