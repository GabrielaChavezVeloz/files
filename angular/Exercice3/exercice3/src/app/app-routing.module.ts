import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsCardComponent } from './students-card/students-card.component';
import { CoursesCardComponent } from './courses-card/courses-card.component';
import { ProjectsCardComponent } from './projects-card/projects-card.component';
import { StudentsByCoursesComponent } from './students-by-courses/students-by-courses.component';
import { StudentsByProjectsComponent } from './students-by-projects/students-by-projects.component';

const routes: Routes = [
    {
        path:"",
        redirectTo:"/students",
        pathMatch:"full"
    },
    {
        path:"students",
        component: StudentsCardComponent
    },
    {
        path:"courses",
        component: CoursesCardComponent
    },
    {
        path:"projects",
        component: ProjectsCardComponent
    },
    {
        path:"studentsbycourses",
        component: StudentsByCoursesComponent
    },
    {
        path:"studentsbyprojects",
        component: StudentsByProjectsComponent
    }
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
  })
export class AppRoutingModule {


}