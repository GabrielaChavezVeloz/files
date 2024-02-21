import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subscription, map } from 'rxjs';

import { Author } from '../model/author';
import { Genre } from '../model/genre';
import { Book } from '../model/book';
import { BookService } from './book.service';
import { AuthorService } from '../authors/author.service';
import { GenreService } from '../genres/genre.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit, AfterViewInit, OnDestroy {

  newBook: Book = new Book();
  currentId = "";

  genres: Genre[];
  genresSubscription: Subscription;
  authors: Author[];
  authorsSubscription: Subscription;

  books: Book[];
  booksSubscription: Subscription;

  displayedColumns = ['name', 'authorName', 'genreName'];
  dataSource = new MatTableDataSource<Book>();

  @ViewChild(MatSort)
  sort: MatSort;

  @ViewChild(MatPaginator) 
  paginator: MatPaginator;

  constructor(private service: BookService, 
              private authorsService: AuthorService,
              private genresService: GenreService) {

  }

  ngOnInit() {

    this.genresSubscription = this.genresService.genresChanged.subscribe(
      genres => (this.genres = genres)
    );
    this.genresService.fetchAvailableGenres();

    this.authorsSubscription = this.authorsService.authorsChanged.subscribe(
      authors => (this.authors = authors)
    );
    this.authorsService.fetchAvailableAuthors();

    this.booksSubscription = this.service.booksChanged.subscribe(
      (books: Book[]) => {
        this.books = books;
        this.dataSource.data = books;
      }
    );
    this.service.fetchAvailableBooks();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  save(form: NgForm) {
    this.newBook.id_author = form.value.author.id;
    this.newBook.authorName = form.value.author.name;
    this.newBook.id_genre = form.value.genre.id;
    this.newBook.genreName = form.value.genre.name;

    if(this.currentId.length !== 0) {
     
      this.service.updateBook(this.newBook, this.currentId);
      this.currentId = "";
    } else {
      
      this.service.addBook(this.newBook);
      console.log("book added: " + this.newBook);
      
    }
    
    this.clean();

  }

  clean() {
    this.newBook = new Book();
  }

  showBook(book: any) {
    this.currentId = book.id;
    this.newBook = { ...book };
  }

  doFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy() {
    this.genresSubscription.unsubscribe();
    this.authorsSubscription.unsubscribe();
    this.booksSubscription.unsubscribe();
  }
}
