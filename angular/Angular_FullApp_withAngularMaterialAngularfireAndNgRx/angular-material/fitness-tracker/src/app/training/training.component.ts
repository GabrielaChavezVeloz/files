import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { TrainingService } from './training.service';
import * as fromTraining from './training.reducer';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit{

  ongoingTraining$ = new Observable<boolean>();

  constructor(private trainingServide: TrainingService, private store: Store<fromTraining.State>) {

  }

  ngOnInit() {
    this.ongoingTraining$ = this.store.select(fromTraining.getIsTraining);

    // this.exerciseSubscription = this.trainingServide.exerciseChanged.subscribe(
    //   exercise => {
    //     if(exercise) {
    //       this.ongoingTraining = true;
    //     } else {
    //       this.ongoingTraining = false;
    //     }
        
    //   });
  }

  // ngOnDestroy() {
  //   if(this.exerciseSubscription) {
  //     this.exerciseSubscription.unsubscribe();
  //   }
  // }

}
