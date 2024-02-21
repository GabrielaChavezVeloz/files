import { Injectable } from "@angular/core";
import { Project } from "../model/project";

@Injectable()
export class ProjectService {

    projects: Project[] = [];


    addProject(newProject: Project) {
        this.projects.push(newProject);
    }

    getAllProjects() {
        return this.projects;
    }

    updateProject(project: Project, position: number) {
        this.projects[position] = { ...project };
    }

    findProjectById(id: number) {
        const existingProject = 
        this.projects.findIndex( (project: Project = new Project()) => project.id === id);

        return existingProject;
    }

    getTotalProjects() {
        return this.projects.length;
    }

    getIdOfLastCourse() {
        return this.projects[this.projects.length - 1].id;
    }
}