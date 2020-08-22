import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './book.entity';

@Controller('books')
export class BooksController {

    constructor(private booksSerive: BooksService) { }

    @Get()
    async findAll(): Promise<Book[]> {
        return this.booksSerive.findAll()
    }


}
