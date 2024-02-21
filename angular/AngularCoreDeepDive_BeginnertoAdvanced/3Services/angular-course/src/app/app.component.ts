import {AfterViewInit, Component, ElementRef, Inject, InjectionToken, 
  OnInit, Optional, QueryList, ViewChild, ViewChildren, 
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  DoCheck} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {Observable} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CoursesService } from './services/courses.service';
import { APP_CONFIG, AppConfig, CONFIG_TOKEN } from './config';


/*function coursesServiceProvider(http:HttpClient): CoursesService {
  return new CoursesService(http);
}

export const COURSES_SERVICE = new InjectionToken<CoursesService>('COURSES_SERVICE');
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //changeDetection: ChangeDetectionStrategy.OnPush
   /*providers: [
    CoursesService
  ]
  
 providers: [
    {
      provide: CONFIG_TOKEN, useValue: APP_CONFIG
    }
  ]

  providers: [
    CoursesService
   
    {provide: COURSES_SERVICE, 
      useFactory: coursesServiceProvider,
      deps: [HttpClient]
    }
    
  ]*/
})
export class AppComponent implements OnInit {

  //courses$ : Observable<Course[]>;
  //courses: Course[];
  courses = COURSES;

  //loaded = false;

  //constructor(@Inject(COURSES_SERVICE) private coursesService: CoursesService) {
  constructor(private coursesService: CoursesService,
              @Inject(CONFIG_TOKEN) private config: AppConfig
              /*private cd: ChangeDetectorRef*/) {
  }
  
  /*ngDoCheck() {
    console.log("ngDoCheck");

    if(this.loaded){
      this.cd.markForCheck();
      console.log("called cd.markForCheck() ");
      this.loaded = undefined;
    }
    
  }*/

  ngOnInit() {
    /*this.coursesService.loadCourses().subscribe(courses => { 
          this.courses = courses 
          //this.loaded = true;
          
        });*/
      //this.courses$ = this.coursesService.loadCourses();
  }

  onEditCourse() {
    /*const course = this.courses[0];
    const newCourse:any = {...course};
    newCourse.description = 'New Value!';
    this.courses[0] = newCourse;*/
    //this.courses = [undefined];

    const course = this.courses[0];
    const newCourse = { 
      ...course,
      description: 'ngOnChanges'
    };
    this.courses[0] = newCourse ;
  }

  save(course:Course) {
    this.coursesService.saveCourse(course).subscribe(
      () => console.log('Course Saved!')
    );
  }

}
