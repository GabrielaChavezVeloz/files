import { Component, Input } from '@angular/core';
import { Student } from '../model/student';
import { STUDENTS } from 'src/db-data';

@Component({
  selector: 'students-card',
  templateUrl: './students-card.component.html',
  styleUrls: ['./students-card.component.css']
})
export class StudentsCardComponent {


  students = STUDENTS;
  newStudent: Student = new Student();
  

  constructor() {

  }

  addStudent() {
  
    this.students.push(this.newStudent);

    console.log("student added: " + this.newStudent)

    this.newStudent = new Student();
  }
}
