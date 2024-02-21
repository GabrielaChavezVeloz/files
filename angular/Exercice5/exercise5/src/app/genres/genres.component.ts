import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';

import { Genre } from '../model/genre';
import { GenreService } from './genre.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit, OnDestroy {

  newGenre: Genre = new Genre();
  currentId = "";

  displayedColumns = ['id', 'name'];
  dataSource = new MatTableDataSource<Genre>();

  genres: Genre[];
  genresSubscription: Subscription;
  

  constructor(private genresService: GenreService) {
  }


  ngOnInit() {
     
    this.genresSubscription = this.genresService.genresChanged.subscribe(
      (genres: Genre[]) => {
        this.genres = genres;
        this.dataSource.data = genres;
      }
    );
    this.genresService.fetchAvailableGenres();
   
  }

  addGenre() {
  
    if(this.currentId.length !== 0) {
     
      this.genresService.updateGenre(this.newGenre, this.currentId);
      this.currentId = "";
    } else {
      
      this.genresService.addGenre(this.newGenre);
      console.log("genre added: " + this.newGenre);
      
    }

    this.clean();
  }

  clean() {
    this.newGenre = new Genre();
  }

  showGenre(genre: any) {
    this.currentId = genre.id;
    this.newGenre = { ...genre };
  }

  ngOnDestroy() {
    this.genresSubscription.unsubscribe();
  }
}
