import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { COURSES } from 'src/db-data';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'courses-card',
  templateUrl: './courses-card.component.html',
  styleUrls: ['./courses-card.component.css']
})
export class CoursesCardComponent implements OnInit {
  
  courses: any[] = [];
  newCourse: Course = new Course();

  displayedColumns = ['id', 'name', 'languaje', 'duration'];
  dataSource = new MatTableDataSource<Course>();
  

  constructor() {
  }
  ngOnInit() {
    this.dataSource.data = this.courses;
  }

  addCourse() {

    if(this.newCourse.id) {
      const existingCourse = this.courses.findIndex( (course: Course = new Course()) => course.id === this.newCourse.id);
      if (existingCourse !== -1) {
        console.log('existingStudent:' + existingCourse);
        this.courses[existingCourse] = { ...this.newCourse };
        console.log("course updated: " + this.newCourse);
      }
    } else {
      let id=0;
      if(this.courses.length>0){
        id = this.courses[this.courses.length - 1].id + 1;
      } else {
        id=1;
      }
      
      this.newCourse.id = id;
      this.courses.push(this.newCourse);
      console.log("student added: " + this.newCourse);
      
    }

    this.clean();
    this.dataSource.data = this.courses;
  }

  clean() {
    this.newCourse = new Course();
  }

  showCourse(course: Course) {
    this.newCourse = { ...course };
    console.log(course.name);
  }
}
