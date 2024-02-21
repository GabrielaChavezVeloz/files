import { Component, OnInit } from '@angular/core';


import { COURSES, PROJECTS, STUDENTS } from 'src/db-data';
import { CoursesCardComponent } from './courses-card/courses-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(public courseComp: CoursesCardComponent) {

  }

  ngOnInit() {

  }

  
}
