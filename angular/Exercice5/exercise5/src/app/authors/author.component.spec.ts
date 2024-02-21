import { TestBed, waitForAsync } from "@angular/core/testing";

import { AppModule } from "../app.module";
import { AuthService } from "../auth/auth.service";
import { Author } from "../model/author";

describe('AuthorsComponent', () => {

    let authorsService: any;
    let authorsSpy: any;

    beforeEach(waitForAsync(() => {
        
        authorsSpy = jasmine.createSpyObj(['addAuthor', 'fetchAvailableAuthors']);


        TestBed.configureTestingModule({
            imports: [AppModule],
            providers: [
                {provide: AuthService, useValue: authorsSpy}
            ]
        })
            .compileComponents()
            .then(() => {
                authorsService = TestBed.inject(AuthService);
            });
    }));

    it('should add the author data', () => {
       
        const changes: Author = {
            name: 'Test author',  
            nacionality: 'Test nacionality',
            age: 0
        };

        let authorsList: Author[] = [];
        const author1: Author = {
            name: 'Author1',  
            nacionality: 'Test nacionality',
            age: 0
        };
        const author2 : Author = {
            name: 'Author2',  
            nacionality: 'Test nacionality',
            age: 0
        };

        authorsList.push(author1);
        authorsList.push(author2);

        authorsService.addAuthor.and.returnValue(authorsList.push(changes));        
        
        expect(authorsList[authorsList.length-1].name).toBe('Test author');
    });

    it('should retrive all authors', () => {
        let authorsList: Author[] = [];

        authorsList.push({
            name: 'Author1',  
            nacionality: 'Test nacionality',
            age: 0
        });

        authorsList.push({
            name: 'Author2',  
            nacionality: 'Test nacionality',
            age: 0
        });

        authorsList.push({
            name: 'Author3',  
            nacionality: 'Test nacionality',
            age: 0
        });

        authorsService.fetchAvailableAuthors.and.returnValue(authorsList);
        
        
        expect(authorsList.length).toBe(3);
    });

   

});