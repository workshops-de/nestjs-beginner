import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BooksController } from './books/books.controller';
import { BooksService } from './books/books.service';
import { Book } from './books/book.entity';

import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'password',
        database: 'workshop',
        entities: [Book],
        synchronize: true,
        insecureAuth: true,
    }), BooksModule,],
    controllers: [AppController],
    providers: [],
})
export class AppModule { }
