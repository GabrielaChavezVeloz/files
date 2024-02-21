import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Injectable } from "@angular/core";
import { of, Observable } from "rxjs";

import { CourseComponent } from "../courses/course/course.component";


@Injectable()
export class ConfirmExitGuard implements CanDeactivate<CourseComponent> {
    
    canDeactivate(component: CourseComponent, 
                  currentRoute: ActivatedRouteSnapshot, 
                  currentState: RouterStateSnapshot, 
                  nextState: RouterStateSnapshot)
        : Observable<boolean> {

        return of (component.confirmExit());
    }

}