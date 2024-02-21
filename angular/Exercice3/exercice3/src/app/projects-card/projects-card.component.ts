import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../model/project';
import { PROJECTS } from 'src/db-data';
import { MatTableDataSource } from '@angular/material/table';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'projects-card',
  templateUrl: './projects-card.component.html',
  styleUrls: ['./projects-card.component.css']
})
export class ProjectsCardComponent implements OnInit {

  
  projectsList : Project[] = [];
  newProject: Project = new Project();
  
  displayedColumns = ['id', 'name', 'location', 'leader'];
  dataSource = new MatTableDataSource<Project>();

  constructor(private projectsService: ProjectService) {

  }
  ngOnInit() {
    this.projectsList = this.projectsService.getAllProjects();
    this.dataSource.data = this.projectsService.getAllProjects();
  }

  addProject() {
  
    if(this.newProject.id) {
      const existingProject = this.projectsService.findProjectById(this.newProject.id);
      if (existingProject !== -1) {
        console.log('existingProject:' + existingProject);
        this.projectsService.updateProject(this.newProject, existingProject);
        console.log("student updated: " + this.newProject);
      }
    } else {
      let id=0;
      const totalProjects = this.projectsService.getTotalProjects();
      if(totalProjects>0){
        id = this.projectsService.getIdOfLastCourse() + 1;
      } else {
        id=1;
      }
      
      this.newProject.id = id;
      this.projectsService.addProject(this.newProject);
      console.log("student added: " + this.newProject);
      
    }

    this.clean();
    this.dataSource.data = this.projectsService.getAllProjects();
  }

  clean() {
    this.newProject = new Project();
  }

  showProject(project: Project) {
    this.newProject = { ...project };
    console.log(project.name);
  }

}
