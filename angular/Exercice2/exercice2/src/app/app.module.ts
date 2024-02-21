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

@NgModule({
  declarations: [
    AppComponent,
    StudentsCardComponent,
    CoursesCardComponent,
    ProjectsCardComponent,
    WelcomeCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [CoursesCardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
