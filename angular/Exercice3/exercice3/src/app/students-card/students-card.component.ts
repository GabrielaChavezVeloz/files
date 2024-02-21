import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Student } from '../model/student';
import { STUDENTS } from 'src/db-data';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'students-card',
  templateUrl: './students-card.component.html',
  styleUrls: ['./students-card.component.css']
})
export class StudentsCardComponent implements OnInit {


  studentsList: Student[] = [];
  newStudent: Student = new Student();


  displayedColumns = ['id', 'firstName', 'lastName', 'age'];
  dataSource = new MatTableDataSource<Student>();
  

  constructor(private studentsService: StudentService) {
  }


  ngOnInit() {
    this.studentsList = this.studentsService.getAllStudents();
    this.dataSource.data = this.studentsService.getAllStudents();
  }

  addStudent() {
  
    if(this.newStudent.id) {
      const existingStudent = this.studentsService.findStudentById(this.newStudent.id);
      if (existingStudent !== -1) {
        console.log('existingStudent:' + existingStudent);
        this.studentsService.updateStudent(this.newStudent, existingStudent);
        console.log("student updated: " + this.newStudent);
      }
    } else {
      let id=0;
      const totalStudents = this.studentsService.getTotalStudents();
      if(totalStudents>0){
        id = this.studentsService.getIdOfLastStudent() + 1;
      } else {
        id=1;
      }
      
      this.newStudent.id = id;
      this.studentsService.addStudent(this.newStudent);
      console.log("student added: " + this.newStudent);
      
    }

    this.clean();
    this.dataSource.data = this.studentsService.getAllStudents();
  }

  clean() {
    this.newStudent = new Student();
  }

  showStudent(student: Student) {
    this.newStudent = { ...student };
    console.log(student.firstName);
  }
}
