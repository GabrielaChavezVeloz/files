
import { Action, createFeatureSelector, createSelector } from "@ngrx/store";

import { TrainingActions, SET_AVAILABLE_TRAININGS, SET_FINISHED_TAININGS, START_TRAINING, STOP_TRAINING } from "./training.actions";
import { Exercise } from './exercise.model';
import * as fromRoot from '../app.reducer';

export interface TrainingState {
    availableExercises: Exercise[];
    finishedExercises: Exercise[];
    activeTraining: Exercise;
}

export interface State extends fromRoot.State {
    training: TrainingState;
}

const initialState: TrainingState = {
    availableExercises : [],
    finishedExercises: [],
    activeTraining: {
        id: '',
        name: '',
        duration: 0,
        calories: 0,
    }
};

export function trainingReducer(state = initialState, action: TrainingActions) {
    if(action.type == SET_AVAILABLE_TRAININGS){
        return {
            ...state,
            availableExercises : action.payload
        };
    } else if(action.type == SET_FINISHED_TAININGS) {
        return {
            ...state,
            finishedExercises : action.payload
        };
    } else if(action.type == START_TRAINING) {
        return {
            ...state,
            activeTraining : {...state.availableExercises.find(ex => ex.id === action.payload)}
        };
    } else if(action.type == STOP_TRAINING) {
        return {
            ...state,
            activeTraining: {
                id: '',
                name: '',
                duration: 0,
                calories: 0,
            }
        };
    } else {
        return state;
    }
}
export const getTrainingState = createFeatureSelector<TrainingState>('training');


export const getAvailableExercises = createSelector(getTrainingState, (state: TrainingState) => state.availableExercises);
export const getFinishedExercises = createSelector(getTrainingState, (state: TrainingState) => state.finishedExercises);
export const getActiveTraining = createSelector(getTrainingState, (state: TrainingState) => state.activeTraining);
export const getIsTraining = createSelector(getTrainingState, (state: TrainingState) => state.activeTraining.id != '');


