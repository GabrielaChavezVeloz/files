import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { map, take } from 'rxjs/operators';
import { Subscription } from "rxjs"; 
import { Store } from "@ngrx/store";

import { Exercise } from "./exercise.model";
import { UIService } from "../shared/ui.service";
import * as UI from '../shared/ui.actions';
import * as Training from './training.actions';
import * as fromTraining from './training.reducer';

@Injectable()
export class TrainingService {

    // exerciseChanged = new Subject<Exercise>();
    // exercisesChanged = new Subject<Exercise[]>();
    // finishedExercisesChanged = new Subject<Exercise[]>();

    // private availableExercises: Exercise[] = [];
    // private runningExercise!: Exercise ;
    private fbSubs: Subscription[] = [];


    constructor(private db: AngularFirestore, 
                private uiService: UIService,
                private store : Store<fromTraining.State>) {

    }

    fetchAvailableExercises() {
        this.store.dispatch(new UI.StartLoading);
        //this.uiService.loadingStateChanged.next(true);
        this.fbSubs.push(this.db
            .collection('availableExercises')
            .snapshotChanges()
            .pipe(map(docArray => {
                //throw(new Error());

                return docArray.map(doc => {

                    return  {
                    
                        ...doc.payload.doc.data() as Exercise,
                        id: doc.payload.doc.id
                    };
                });
            }))
            .subscribe((exercises: Exercise[]) => {
                //this.uiService.loadingStateChanged.next(false);
                // this.availableExercises = exercises;
                // this.exercisesChanged.next([...this.availableExercises]);
                this.store.dispatch(new UI.SopLoading);
                this.store.dispatch(new Training.SetAvailableTrainings(exercises));
                
            }, error => {
                //this.uiService.loadingStateChanged.next(false);
                this.store.dispatch(new UI.SopLoading);
                this.uiService.showSnackbar('Fetching Exercises failed, please try again later', '', 3000);
                //this.exercisesChanged.next(null);
            }));
    }

    starExercise(selectedId: string) {
        //this.db.doc('availableExercises/' + selectedId).update({lastSelected: new Date()});
        // this.runningExercise = this.availableExercises.find(
        //     ex => ex.id === selectedId) as Exercise;
        // this.exerciseChanged.next({...this.runningExercise});

        this.store.dispatch(new Training.StartTraining(selectedId));
    }

    completeExercise() {
        this.store.select(fromTraining.getActiveTraining).pipe(take(1)).subscribe(ex => {
            this.addDataToDatabase({ 
                ...ex, 
                date: new Date(), 
                state: 'completed' 
            });
            this.store.dispatch(new Training.StopTraining());
        });
        
        
        // this.runningExercise = this.testExercise;
        // this.exerciseChanged.next(this.testExercise);
        
    }

    cancelExercise(progress: number) {
        this.store.select(fromTraining.getActiveTraining).pipe(take(1)).subscribe(ex => {
            this.addDataToDatabase({ 
                ...ex, 
                duration: ex.duration * (progress / 100),
                calories: ex.calories * (progress / 100),
                date: new Date(), 
                state: 'cancelled' 
            });
            this.store.dispatch(new Training.StopTraining());
        });

        // this.runningExercise = this.testExercise;
        // this.exerciseChanged.next(this.testExercise);
    }

    fetchCompletedOrCancelledExercises() {
        this.fbSubs.push(this.db
            .collection('finishedExercises')
            .valueChanges()
            .subscribe((exercises: any[]) => {
                //this.finishedExercisesChanged.next(exercises);
                this.store.dispatch(new Training.SetFinishedTrainings(exercises));
            }));
    }

    cancelSubscriptions() {
        this.fbSubs.forEach(sub => sub.unsubscribe());
    }

    private addDataToDatabase(exercise: Exercise) {
        this.db.collection('finishedExercises').add(exercise);
    }
}