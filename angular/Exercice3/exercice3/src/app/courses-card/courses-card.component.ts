import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { COURSES } from 'src/db-data';
import { MatTableDataSource } from '@angular/material/table';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'courses-card',
  templateUrl: './courses-card.component.html',
  styleUrls: ['./courses-card.component.css']
})
export class CoursesCardComponent implements OnInit {
  
  coursesList: Course[] = [];
  newCourse: Course = new Course();

  displayedColumns = ['id', 'name', 'languaje', 'duration'];
  dataSource = new MatTableDataSource<Course>();
  

  constructor(private coursesService: CourseService ) {
  }

  ngOnInit() {
    this.coursesList = this.coursesService.getAllCourses();
    this.dataSource.data = this.coursesService.getAllCourses();
  }

  addCourse() {

    if(this.newCourse.id) {
      const existingCourse = this.coursesService.findCourseById(this.newCourse.id);
      if (existingCourse !== -1) {
        console.log('existingStudent:' + existingCourse);
        this.coursesService.updateCourse(this.newCourse, existingCourse);
        console.log("course updated: " + this.newCourse);
      }
    } else {
      let id=0;
      const totalCourses = this.coursesService.getTotalCourses();
      if(totalCourses>0){
        id = this.coursesService.getIdOfLastCourse() + 1;
      } else {
        id=1;
      }
      
      this.newCourse.id = id;
      this.coursesService.addCourse(this.newCourse);
      console.log("student added: " + this.newCourse);
      
    }

    this.clean();
    this.dataSource.data = this.coursesService.getAllCourses();
  }

  clean() {
    this.newCourse = new Course();
  }

  showCourse(course: Course) {
    this.newCourse = { ...course };
    console.log(course.name);
  }
}
