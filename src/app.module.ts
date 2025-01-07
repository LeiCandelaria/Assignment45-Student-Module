
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

///for database connection//
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'student_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
