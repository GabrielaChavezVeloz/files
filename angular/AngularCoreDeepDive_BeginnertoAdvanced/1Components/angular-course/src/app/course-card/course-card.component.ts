import { Component, Input, OnInit, Output, ViewChild, 
  AfterViewInit, ContentChild, ElementRef, ContentChildren, 
  AfterContentInit, QueryList, TemplateRef } from '@angular/core';
import { Course } from '../model/course';
import { EventEmitter } from '@angular/core';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit, AfterViewInit, AfterContentInit{

  @Input()
  course:Course;

  @Input()
  noImageTpl: TemplateRef<any>;

  @Input()
  cardIndex: number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  @ContentChildren(CourseImageComponent, {read: ElementRef})
  images: QueryList<ElementRef>;

  constructor() {

  }
  ngAfterContentInit() {
    console.log(this.images);
  }
  ngAfterViewInit() {
    
  }

  ngOnInit() {

  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  onCourseViewed() {
    
    this.courseEmitter.emit(this.course);
  }

  cardClasses() {
    if(this.course.category == 'BEGINNER'){
      return 'beginner';      
    }
  }

  cardStyles() {
    //return {'text-decoration': 'underline'};
    return {
      'background-image': 'url(' + this.course.iconUrl + ')'
    }
  }

}
