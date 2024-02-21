import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NgForm } from '@angular/forms';

import { Student } from '../model/student';
import { Project } from '../model/project';
import { StudentsByProjects } from '../model/studentsByProjects';
import { StudentsByProjectsService } from '../services/studentsByProjects.service';
import { StudentService } from '../services/student.service';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-students-by-projects',
  templateUrl: './students-by-projects.component.html',
  styleUrls: ['./students-by-projects.component.css']
})
export class StudentsByProjectsComponent {

  studentsList: Student[] = []; 
  projectsList: Project[] = [];
  newStudent: StudentsByProjects = new StudentsByProjects();
  dataList: StudentsByProjects[] = [];

  displayedColumns = ['studentName', 'projectName'];
  dataSource = new MatTableDataSource<StudentsByProjects>();

  constructor(private service: StudentsByProjectsService, 
              private studentsService: StudentService,
              private projectsService: ProjectService) {

  }
  ngOnInit() {
    this.studentsList = this.studentsService.getAllStudents();
    this.projectsList = this.projectsService.getAllProjects();
    this.dataSource.data = this.service.getAll();
    this.dataList = this.service.getAll();
  }

  save(form: NgForm) {
    console.log("estudiante: "+form.value.student.id);
    console.log("proyecto: "+form.value.project.id);

    this.newStudent.id_student = form.value.student.id;
    this.newStudent.studentName = form.value.student.firstName + ' ' + form.value.student.lastName;
    this.newStudent.id_project = form.value.project.id;
    this.newStudent.projectName = form.value.project.name;

    this.service.addStudent(this.newStudent);
    
    this.clean();
    this.dataSource.data = this.service.getAll();
    

  }

  clean() {
    this.newStudent = new StudentsByProjects();
  }

}
