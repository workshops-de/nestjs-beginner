import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BooksController } from './books/books.controller';
import { BooksService } from './books/books.service';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'password',
        database: 'workshop',
        entities: [],
        synchronize: true,
        insecureAuth: true,
    }),],
    controllers: [AppController, BooksController],
    providers: [BooksService],
})
export class AppModule { }
