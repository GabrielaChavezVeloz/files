import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../model/project';
import { PROJECTS } from 'src/db-data';

@Component({
  selector: 'projects-card',
  templateUrl: './projects-card.component.html',
  styleUrls: ['./projects-card.component.css']
})
export class ProjectsCardComponent implements OnInit{

  
  projects = PROJECTS;
  newProject: Project = new Project();
  

  constructor() {

  }
  ngOnInit() {
    
  }

  addProject() {
  
    this.projects.push(this.newProject);

    console.log("project added: " + this.newProject)

    this.newProject = new Project();
  }

}
