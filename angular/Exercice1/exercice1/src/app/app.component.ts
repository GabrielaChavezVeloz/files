import { Component, OnInit } from '@angular/core';
import { COURSES, PROJECTS, STUDENTS } from 'src/db-data';
import { CoursesCardComponent } from './courses-card/courses-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  students = STUDENTS;

  courses = COURSES;

  projects = PROJECTS;

  showCourses = false;

  showStudents = true;

  showProjects = false;


  //courseComp: CoursesCardComponent;

  constructor(public courseComp: CoursesCardComponent) {

  }

  ngOnInit() {
    console.log(this.students[0].firstName);

    console.log(this.courses[1].name);

  }

  showStudentsTab() {
    this.showStudents = true;
    this.showCourses = false;
    this.showProjects = false;
  }

  showCoursesTab() {
    this.showStudents = false;
    this.showCourses = true;
    this.showProjects = false;
  }

  showProjectsTab() {
    this.showStudents = false;
    this.showCourses = false;
    this.showProjects = true;
  }

}
