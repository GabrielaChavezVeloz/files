import { TestBed, waitForAsync } from "@angular/core/testing";

import { AppModule } from "../app.module";
import { GenreService } from "./genre.service";
import { Genre } from "../model/genre";

describe('GenresComponent', () => {

    let genresService: any;
    let genresSpy: any;

    beforeEach(waitForAsync(() => {
        
        genresSpy = jasmine.createSpyObj(['addGenre', 'fetchAvailableGenres']);


        TestBed.configureTestingModule({
            imports: [AppModule],
            providers: [
                {provide: GenreService, useValue: genresSpy}
            ]
        })
            .compileComponents()
            .then(() => {
                genresService = TestBed.inject(GenreService);
            });
    }));

    it('should add the genre data', () => {
       
        const changes: Genre = {name: 'Test genre' };

        let genresList: Genre[] = [{name: 'Horror'}, {name: 'Romance'}];

        genresService.addGenre.and.returnValue(genresList.push(changes));

        // genresService.addGenre.and.callFake(() => {
        //     console.log('spy genre');
        //     genresList.push(changes);
        // });
        
        
        expect(genresList[genresList.length-1].name).toBe('Test genre');
    });

    it('should retrive all genres', () => {
        let genresList: Genre[] = [{name: 'Horror'}, {name: 'Romance'}, {name: 'Thriller'}];

        genresService.fetchAvailableGenres.and.returnValue(genresList);
        
        
        expect(genresList.length).toBe(3);
    });

   

});