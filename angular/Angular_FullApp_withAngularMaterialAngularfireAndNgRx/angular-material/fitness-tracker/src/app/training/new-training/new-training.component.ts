import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { UIService } from 'src/app/shared/ui.service';
import * as fromTraining from '../training.reducer';
import * as fromRoot from '../../app.reducer';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  exercises$ = new Observable<Exercise[]>();
  isLoading$ = new Observable<boolean>();

  //private exerciseSubscription!: Subscription;
  //private loadingSubscription!: Subscription;


  constructor(private trainingService: TrainingService, 
              private uiService: UIService,
              private store: Store<fromTraining.State>) {

  }

  ngOnInit() {

    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
    this.exercises$ = this.store.select(fromTraining.getAvailableExercises);
    this.fetchExercises();

    // this.loadingSubscription = this.uiService.loadingStateChanged.subscribe(
    //   isLoading => {
    //     this.isLoading = isLoading;
    // });

    // this.exerciseSubscription = this.trainingService.exercisesChanged.subscribe(
    //   exercises => {
    //     this.exercises = exercises 
    // });

      
    
    //this.exercises = this.db.collection('availableExercises').valueChanges();
    //this.exercises = this.trainingService.getAvailableExercises();
  }

  fetchExercises() {
    this.trainingService.fetchAvailableExercises();
  }

  onStartTraining(form: NgForm) {
    this.trainingService.starExercise(form.value.exercise);
  }

  // ngOnDestroy() {
  //   if(this.exerciseSubscription) {
  //     this.exerciseSubscription.unsubscribe();
  //   }

  //   if(this.loadingSubscription) {
  //     this.loadingSubscription.unsubscribe();
  //   }
  // }

}
