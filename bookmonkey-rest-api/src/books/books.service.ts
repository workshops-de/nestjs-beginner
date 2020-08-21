import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {

    private books: string[] = [
        'NestJS for Beginner',
        'A cats guide',
        'Running with cats'
    ]

    public getAll() {
        return this.books;
    }



}
