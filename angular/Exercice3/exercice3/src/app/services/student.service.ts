import { Injectable } from "@angular/core";
import { Student } from "../model/student";

@Injectable()
export class StudentService {

    students: Student[] = [];


    addStudent(newStudent: Student) {
        this.students.push(newStudent);
    }

    getAllStudents() {
        return this.students;
    }

    updateStudent(student: Student, position: number) {
        this.students[position] = { ...student };
    }

    findStudentById(id: number) {
        const existingStudent = 
        this.students.findIndex( (student: Student = new Student()) => student.id === id);

        return existingStudent;
    }

    getTotalStudents() {
        return this.students.length;
    }

    getIdOfLastStudent() {
        return this.students[this.students.length - 1].id;
    }
}