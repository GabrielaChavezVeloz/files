import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentsCardComponent } from './students-card/students-card.component';
import { CoursesCardComponent } from './courses-card/courses-card.component';
import { ProjectsCardComponent } from './projects-card/projects-card.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsCardComponent,
    CoursesCardComponent,
    ProjectsCardComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [CoursesCardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
