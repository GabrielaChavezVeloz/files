import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../model/project';
import { PROJECTS } from 'src/db-data';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'projects-card',
  templateUrl: './projects-card.component.html',
  styleUrls: ['./projects-card.component.css']
})
export class ProjectsCardComponent implements OnInit {

  
  projects : any[] = [];
  newProject: Project = new Project();
  
  displayedColumns = ['id', 'name', 'location', 'leader'];
  dataSource = new MatTableDataSource<Project>();

  constructor() {

  }
  ngOnInit() {
    this.dataSource.data = this.projects;
  }

  addProject() {
  
    if(this.newProject.id) {
      const existingProject = this.projects.findIndex( (project: Project = new Project()) => project.id === this.newProject.id);
      if (existingProject !== -1) {
        console.log('existingProject:' + existingProject);
        this.projects[existingProject] = { ...this.newProject };
        console.log("student updated: " + this.newProject);
      }
    } else {
      let id=0;
      if(this.projects.length>0){
        id = this.projects[this.projects.length - 1].id + 1;
      } else {
        id=1;
      }
      
      this.newProject.id = id;
      this.projects.push(this.newProject);
      console.log("student added: " + this.newProject);
      
    }

    this.clean();
    this.dataSource.data = this.projects;
  }

  clean() {
    this.newProject = new Project();
  }

  showProject(project: Project) {
    this.newProject = { ...project };
    console.log(project.name);
  }

}
