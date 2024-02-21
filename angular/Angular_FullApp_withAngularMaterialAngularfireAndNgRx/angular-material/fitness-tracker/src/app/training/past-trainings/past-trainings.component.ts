import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Store } from '@ngrx/store';

import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';
import * as fromTraining from '../training.reducer';


@Component({
  selector: 'app-past-trainings',
  templateUrl: './past-trainings.component.html',
  styleUrls: ['./past-trainings.component.css']
})
export class PastTrainingsComponent implements OnInit, AfterViewInit {
  displayedColumns = ['date', 'name', 'duration', 'calories', 'state'];
  dataSource = new MatTableDataSource<Exercise>();

  //private exChangedSubscription!: Subscription;

  @ViewChild(MatSort)
  sort!: MatSort;

  @ViewChild(MatPaginator) 
  paginator!: MatPaginator;

  constructor(private trainingService: TrainingService,
              private store: Store<fromTraining.State>) {

  }

  ngOnInit() {
    this.store.select(fromTraining.getFinishedExercises).subscribe(
      (exercises: Exercise[]) => {
        this.dataSource.data = exercises;
      });

    this.trainingService.fetchCompletedOrCancelledExercises();

    // this.exChangedSubscription = this.trainingService.finishedExercisesChanged.subscribe(
    //   (exercises: Exercise[]) => {
    //     this.dataSource.data = exercises;
    //   });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // ngOnDestroy() {
  //   if(this.exChangedSubscription) {
  //     this.exChangedSubscription.unsubscribe();
  //   }
  // }
}
