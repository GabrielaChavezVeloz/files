import { Component, Input } from '@angular/core';
import { Course } from '../model/course';
import { COURSES } from 'src/db-data';

@Component({
  selector: 'courses-card',
  templateUrl: './courses-card.component.html',
  styleUrls: ['./courses-card.component.css']
})
export class CoursesCardComponent {
  
  courses = COURSES;
  newCourse: Course = new Course();
  

  constructor() {

  }

  addCourse() {
  
    this.courses.push(this.newCourse);

    console.log("course added: " + this.newCourse)

    this.newCourse = new Course();
  }
}
