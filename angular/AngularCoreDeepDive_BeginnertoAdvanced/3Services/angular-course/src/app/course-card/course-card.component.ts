import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Attribute,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    DoCheck,
    ElementRef,
    EventEmitter,
    Inject,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Optional,
    Output,
    QueryList,
    Self,
    SkipSelf,
    ViewEncapsulation
} from '@angular/core';
import {Course} from '../model/course';
import {CourseImageComponent} from '../course-image/course-image.component';
import { CoursesService } from '../services/courses.service';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
    //changeDetection: ChangeDetectionStrategy.OnPush
    /*providers: [
        CoursesService
    ]*/
})
export class CourseCardComponent implements OnInit, OnDestroy, OnChanges, 
    AfterContentChecked, AfterViewChecked, AfterContentInit, AfterViewInit, DoCheck {

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    /*@Input()
    type;*/

    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();


    constructor(private coursesService: CoursesService,
                @Attribute('type') private type: string,
                /*private cd: ChangeDetectorRef*/) {

        console.log('constructor', this.course);
    }
    ngDoCheck() {
        console.log("ngDoCheck");
    }
    ngAfterContentInit() {
        console.log("ngAfterContentInit");
    }
    ngAfterViewInit() {
        console.log("ngAfterViewInit");
    }
    ngAfterViewChecked() {
        console.log("ngAfterViewChecked");
        //this.course.description = 'ngAfterViewChecked';
    }
    ngAfterContentChecked() {
        console.log("ngAfterContentChecked");

        /*this.course.description = 'ngAfterContentChecked';

        this.course.category = 'ADVANCED';*/

        //this.course.iconUrl = '';
    }
    ngOnDestroy() {
        console.log("ngOnDestroy");
    }

    ngOnChanges(changes) {
        console.log("ngOnChanges", changes);
    }

    ngOnInit() {
        console.log("ngOninit", this.course);
    }


    onSaveClicked(description:string) {

        this.courseEmitter.emit({...this.course, description});

    }


    onTitleChanged(newTitle:string) {
        this.course.description = newTitle;
    }


}
