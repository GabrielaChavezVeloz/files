import { Injectable } from "@angular/core";
import { Subject, map } from "rxjs";
import { AngularFirestore } from "@angular/fire/compat/firestore";

import { Book } from "../model/book";


@Injectable()
export class BookService {

    private availableBooks: Book[] = [];
    booksChanged = new Subject<Book[]>();

    constructor(private db: AngularFirestore) {}

    fetchAvailableBooks() {
        this.db
            .collection('books')
            .snapshotChanges()
            .pipe(
                map(docArray => {
                return docArray.map(doc => {
                    return {
                    id: doc.payload.doc.id,
                    ...(doc.payload.doc.data() as Book)
                    };
                });
                })
            )
            .subscribe((books: Book[]) => {
                this.availableBooks = books;
                this.booksChanged.next([...this.availableBooks]);
            });
    }

    addBook(newBook: Book) {
        this.addDataToDatabase(newBook);
    }

    updateBook(book: Book, id: string) {
        this.db.doc('books/' + id).update({
            name: book.name,
            id_author: book.id_author,
            authorName: book.authorName,
            id_genre: book.id_genre,
            genreName: book.genreName
          });
          
        this.booksChanged.next([...this.availableBooks]);
    }

    private addDataToDatabase(book: Book) {
        this.db.collection('books').add(JSON.parse( JSON.stringify(book)));
        this.booksChanged.next([...this.availableBooks]);
    }
}