import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentsByCoursesService } from '../services/studentsByCourses.service';
import { Student } from '../model/student';
import { Course } from '../model/course';
import { StudentService } from '../services/student.service';
import { CourseService } from '../services/course.service';
import { StudentsByCourses } from '../model/studentsByCourses';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-students-by-courses',
  templateUrl: './students-by-courses.component.html',
  styleUrls: ['./students-by-courses.component.css']
})
export class StudentsByCoursesComponent implements OnInit {

  studentsList: Student[] = []; 
  coursesList: Course[] = [];
  newStudent: StudentsByCourses = new StudentsByCourses();
  dataList: StudentsByCourses[] = [];

  displayedColumns = ['studentName', 'courseName'];
  dataSource = new MatTableDataSource<StudentsByCourses>();

  constructor(private service: StudentsByCoursesService, 
              private studentsService: StudentService,
              private coursesService: CourseService) {

  }
  ngOnInit() {
    this.studentsList = this.studentsService.getAllStudents();
    this.coursesList = this.coursesService.getAllCourses();
    this.dataSource.data = this.service.getAll();
    this.dataList = this.service.getAll();
  }

  save(form: NgForm) {
    console.log("estudiante: "+form.value.student.id);
    console.log("curso: "+form.value.course.id);

    this.newStudent.id_student = form.value.student.id;
    this.newStudent.studentName = form.value.student.firstName + ' ' + form.value.student.lastName;
    this.newStudent.id_course = form.value.course.id;
    this.newStudent.courseName = form.value.course.name;

    this.service.addStudent(this.newStudent);
    
    this.clean();
    this.dataSource.data = this.service.getAll();
    

  }

  clean() {
    this.newStudent = new StudentsByCourses();
  }
}
