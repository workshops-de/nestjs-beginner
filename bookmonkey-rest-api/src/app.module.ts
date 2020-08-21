import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BooksController } from './books/books.controller';
import { BooksService } from './books/books.service';

@Module({
    imports: [],
    controllers: [AppController, BooksController],
    providers: [BooksService],
})
export class AppModule { }
