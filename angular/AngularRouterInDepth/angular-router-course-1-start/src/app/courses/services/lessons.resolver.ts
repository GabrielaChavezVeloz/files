import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { LessonSummary } from "../model/lesson-summary";
import { CoursesService } from "./courses.service";


@Injectable()
export class LessonResolver implements Resolve<LessonSummary[]> {

    constructor(private courses: CoursesService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
        Observable<LessonSummary[]> {
        
        const courseUrl = route.paramMap.get("courseUrl");

        return this.courses.loadAllCourseLessonsSummary(courseUrl);
    }

}