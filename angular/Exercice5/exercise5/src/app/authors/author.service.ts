import { Injectable } from "@angular/core";
import { Subject, map } from "rxjs";
import { AngularFirestore } from "@angular/fire/compat/firestore";

import { Author } from "../model/author";

@Injectable()
export class AuthorService {

    private availableAuthors: Author[] = [];
    authorsChanged = new Subject<Author[]>();

    constructor(private db: AngularFirestore) {}

    fetchAvailableAuthors() {
        this.db
            .collection('authors')
            .snapshotChanges()
            .pipe(
                map(docArray => {
                return docArray.map(doc => {
                    return {
                    id: doc.payload.doc.id,
                    ...(doc.payload.doc.data() as Author)
                    };
                });
                })
            )
            .subscribe((genres: Author[]) => {
                this.availableAuthors = genres;
                this.authorsChanged.next([...this.availableAuthors]);
            });
    }

    addAuthor(newAuthor: Author) {
        this.addDataToDatabase(newAuthor);
    }

    updateAuthor(author: Author, id: string) {
        this.db.doc('authors/' + id).update({
            name: author.name,
            nacionality: author.nacionality,
            age: author.age
          });
        this.authorsChanged.next([...this.availableAuthors]);
    }

    private addDataToDatabase(author: Author) {
        this.db.collection('authors').add(JSON.parse( JSON.stringify(author)));
        this.authorsChanged.next([...this.availableAuthors]);
    }
}