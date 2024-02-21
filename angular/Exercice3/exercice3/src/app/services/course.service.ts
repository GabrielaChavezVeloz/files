import { Injectable } from "@angular/core";
import { Course } from "../model/course";

@Injectable()
export class CourseService {

    courses: Course[] = [];


    addCourse(newCourse: Course) {
        this.courses.push(newCourse);
    }

    getAllCourses() {
        return this.courses;
    }

    updateCourse(course: Course, position: number) {
        this.courses[position] = { ...course };
    }

    findCourseById(id: number) {
        const existingCourse = 
        this.courses.findIndex( (course: Course = new Course()) => course.id === id);

        return existingCourse;
    }

    getTotalCourses() {
        return this.courses.length;
    }

    getIdOfLastCourse() {
        return this.courses[this.courses.length - 1].id;
    }
}