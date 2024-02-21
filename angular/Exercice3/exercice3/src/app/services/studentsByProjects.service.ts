import { Injectable } from "@angular/core";
import { StudentsByProjects } from "../model/studentsByProjects";

@Injectable()
export class StudentsByProjectsService {

    students: StudentsByProjects[] = [];


    addStudent(newStudent: StudentsByProjects) {
        this.students.push(newStudent);
        console.log("servicio studentName: "+newStudent.studentName);
    }

    getAll() {
        return this.students;
    }
}