import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

import { Author } from '../model/author';
import { AuthorService } from '../services/author.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit, AfterViewInit{
  newAuthor: Author = new Author();
  currentId = "";

  authors: Author[];
  authorsSubscription: Subscription;

  displayedColumns = ['id', 'name', 'nacionality', 'age'];
  dataSource = new MatTableDataSource<Author>();

  @ViewChild(MatSort)
  sort: MatSort;
  
  @ViewChild(MatPaginator) 
  paginator: MatPaginator;

  constructor(private authorsService: AuthorService, 
              ) {
  }

  ngOnInit() {
    this.authorsSubscription = this.authorsService.authorsChanged.subscribe(
      (authors: Author[]) => {
        this.authors = authors;
        this.dataSource.data = authors;
      }
    );
    this.authorsService.fetchAvailableAuthors();

  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  addAuthor() {

    if(this.currentId.length !== 0) {
     
      this.authorsService.updateAuthor(this.newAuthor, this.currentId);
      this.currentId = "";
    } else {
      
      this.authorsService.addAuthor(this.newAuthor);
      console.log("author added: " + this.newAuthor);
      
    }

    this.clean();
  }

  clean() {
    this.newAuthor = new Author();
  }

  showAuthor(author: any) {
    this.currentId = author.id;
    this.newAuthor = { ...author };
  }
}
