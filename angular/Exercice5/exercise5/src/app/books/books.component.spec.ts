import { TestBed, waitForAsync } from "@angular/core/testing";

import { AppModule } from "../app.module";
import { BookService } from "./book.service";
import { Book } from "../model/book";

describe('BooksComponent', () => {

    let booksService: any;
    let booksSpy: any;

    beforeEach(waitForAsync(() => {
        
        booksSpy = jasmine.createSpyObj(['addBook', 'fetchAvailableBooks']);


        TestBed.configureTestingModule({
            imports: [AppModule],
            providers: [
                {provide: BookService, useValue: booksSpy}
            ]
        })
            .compileComponents()
            .then(() => {
                booksService = TestBed.inject(BookService);
            });
    }));

    it('should add the book data', () => {
       
        const changes: Book = {
            name: 'Test book',  
            id_author: 0,
            authorName: "Test author",
            id_genre: 0,
            genreName: "Test genre"
        };

        let booksList: Book[] = [];
        const book1: Book = {
            name: 'Book1',  
            id_author: 0,
            authorName: "Test author",
            id_genre: 0,
            genreName: "Test genre"
        };
        const book2: Book = {
            name: 'Book2',  
            id_author: 0,
            authorName: "Test author",
            id_genre: 0,
            genreName: "Test genre"
        };

        booksList.push(book1);
        booksList.push(book2);

        booksService.addBook.and.returnValue(booksList.push(changes));        
        
        expect(booksList[booksList.length-1].name).toBe('Test book');
    });

    it('should retrive all books', () => {
        let booksList: Book[] = [];

        booksList.push({
            name: 'Book1',  
            id_author: 0,
            authorName: "Test author",
            id_genre: 0,
            genreName: "Test genre"
        });

        booksList.push({
            name: 'Book1',  
            id_author: 0,
            authorName: "Test author",
            id_genre: 0,
            genreName: "Test genre"
        });

        booksList.push({
            name: 'Book3',  
            id_author: 0,
            authorName: "Test author",
            id_genre: 0,
            genreName: "Test genre"
        });

        booksService.fetchAvailableBooks.and.returnValue(booksList);
        
        
        expect(booksList.length).toBe(3);
    });

   

});