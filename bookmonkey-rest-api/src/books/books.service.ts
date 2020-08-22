import { Injectable } from '@nestjs/common';

import { Book } from './book.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {

    constructor(@InjectRepository(Book)
    private booksRepository: Repository<Book>, ) {
    }

    findAll(): Promise<Book[]> {
        return this.booksRepository.find();
    }

    findOne(id: string): Promise<Book> {
        return this.booksRepository.findOne(id);
    }

    create(book: Book): Book {
        return this.booksRepository.create(book);
    }

    async remove(id: string): Promise<void> {
        await this.booksRepository.delete(id);
    }
}
