import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { StudentsCardComponent } from './students-card/students-card.component';
import { CoursesCardComponent } from './courses-card/courses-card.component';
import { ProjectsCardComponent } from './projects-card/projects-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeCardComponent } from './welcome-card/welcome-card.component';
import { MaterialModule } from './material.module';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { AppRoutingModule } from './app-routing.module';
import { StudentsByCoursesComponent } from './students-by-courses/students-by-courses.component';
import { StudentsByProjectsComponent } from './students-by-projects/students-by-projects.component';
import { StudentService } from './services/student.service';
import { CourseService } from './services/course.service';
import { ProjectService } from './services/project.service';
import { StudentsByCoursesService } from './services/studentsByCourses.service';
import { StudentsByProjectsService } from './services/studentsByProjects.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentsCardComponent,
    CoursesCardComponent,
    ProjectsCardComponent,
    WelcomeCardComponent,
    HeaderComponentComponent,
    StudentsByCoursesComponent,
    StudentsByProjectsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [
     
    StudentService,
    CourseService,
    ProjectService,
    StudentsByCoursesService,
    StudentsByProjectsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
