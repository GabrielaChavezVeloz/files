import { Component, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  courses = COURSES;

  /*title = COURSES[0].description;
  price = 9.992423424242;
  rate = 0.67;
  course = COURSES[0];
  startDate = new Date(2000, 0, 1);*/

  /*@ViewChild('cardRef1', {read:ElementRef})
  card1: ElementRef;

  @ViewChild('courseImage')
  courseImage: ElementRef;*/

  @ViewChildren(CourseCardComponent, {read: ElementRef})
  cards: QueryList<ElementRef>;

  constructor() {
  }

  ngAfterViewInit() {
    /*this.cards.changes.subscribe(
      cards => console.log(cards)
    );*/

    //console.log(this.cards);

  }

  onCourseEdited() {
    this.courses.push(
      {
        id: 1,
        description: "Angular core deep dive",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
        longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
        lessonsCount: 10
    }
    );
  }

  onCourseSelected(course:Course) {
    //console.log("App component - click event bubbled...", course);

  }

}
