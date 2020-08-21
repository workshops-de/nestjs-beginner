import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {

    constructor(private booksSerive: BooksService) { }

    @Get()
    findAll(): string[] {
        return this.booksSerive.getAll()
    }


}
