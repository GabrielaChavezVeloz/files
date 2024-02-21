import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Student } from '../model/student';
import { STUDENTS } from 'src/db-data';

@Component({
  selector: 'students-card',
  templateUrl: './students-card.component.html',
  styleUrls: ['./students-card.component.css']
})
export class StudentsCardComponent implements OnInit, AfterViewInit {


  students: any[] = [];
  newStudent: Student = new Student();

  test = STUDENTS;

  displayedColumns = ['id', 'firstName', 'lastName', 'age'];
  dataSource = new MatTableDataSource<Student>();
  

  constructor() {
    console.log("tamaño: "+ this.students.length);
  }
  ngAfterViewInit() {
    //this.dataSource.data = this.test;
  }
  ngOnInit() {
    this.dataSource.data = this.students;
  }

  addStudent() {
  
    if(this.newStudent.id) {
      const existingStudent = this.students.findIndex( (student: Student = new Student()) => student.id === this.newStudent.id);
      if (existingStudent !== -1) {
        console.log('existingStudent:' + existingStudent);
        this.students[existingStudent] = { ...this.newStudent };
        console.log("student updated: " + this.newStudent);
      }
    } else {
      let id=0;
      if(this.students.length>0){
        id = this.students[this.students.length - 1].id + 1;
      } else {
        id=1;
      }
      
      this.newStudent.id = id;
      this.students.push(this.newStudent);
      console.log("student added: " + this.newStudent);
      
    }

    this.clean();
    this.dataSource.data = this.students;
  }

  clean() {
    this.newStudent = new Student();
  }

  showStudent(student: Student) {
    this.newStudent = { ...student };
    console.log(student.firstName);
  }
}
