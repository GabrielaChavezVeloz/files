import { Injectable } from "@angular/core";
import { StudentsByCourses } from "../model/studentsByCourses";

@Injectable()
export class StudentsByCoursesService {

    students: StudentsByCourses[] = [];


    addStudent(newStudent: StudentsByCourses) {
        this.students.push(newStudent);
        console.log("servicio studentName: "+newStudent.studentName);
    }

    getAll() {
        return this.students;
    }
}