import { Injectable } from "@angular/core";
import { Subject, map } from 'rxjs';
import { AngularFirestore } from "@angular/fire/compat/firestore";

import { Genre } from "../model/genre";


@Injectable()
export class GenreService {

    private availableGenres: Genre[] = [];
    genresChanged = new Subject<Genre[]>();

    constructor(private db: AngularFirestore) {}

    fetchAvailableGenres() {
        this.db
            .collection('genres')
            .snapshotChanges()
            .pipe(
                map(docArray => {
                return docArray.map(doc => {
                    return {
                    id: doc.payload.doc.id,
                    ...(doc.payload.doc.data() as Genre)
                    };
                });
                })
            )
            .subscribe((genres: Genre[]) => {
                this.availableGenres = genres;
                this.genresChanged.next([...this.availableGenres]);
            });
    }

    addGenre(newGenre: Genre) {
        this.addDataToDatabase(newGenre);
    }

    updateGenre(genre: Genre, id: string) {
        this.db.doc('genres/' + id).update({
            name: genre.name
          });
        this.genresChanged.next([...this.availableGenres]);
    }

    private addDataToDatabase(genre: Genre) {
        this.db.collection('genres').add(JSON.parse( JSON.stringify(genre)));
        this.genresChanged.next([...this.availableGenres]);
    }
}