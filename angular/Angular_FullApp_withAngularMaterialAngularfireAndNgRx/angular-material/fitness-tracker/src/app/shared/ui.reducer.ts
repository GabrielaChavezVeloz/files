
import { Action } from "@ngrx/store";

import { UIActions, START_LOADING, STOP_LOADING } from "./ui.actions";

export interface State {
    isLoading: boolean;
}

const initialState: State = {
    isLoading: false
};

export function uiReducer(state = initialState, action: UIActions) {
    // switch(action.type) {
    //     case START_LOADING:
    //         return {
    //             isLoading: true
    //         };
    //     case STOP_LOADING:
    //         return {
    //             isLoading: false
    //         };
    //     default: {
    //         return state;
    //     }
    // }

    if(action.type == START_LOADING){
        return {
            isLoading: true
        };
    } else if(action.type == STOP_LOADING) {
        return {
            isLoading: false
        };
    } else {
        return state;
    }
}

export const getIsLoading = (state: State) => state.isLoading;