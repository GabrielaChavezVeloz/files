
import { Action } from "@ngrx/store";

import { AuthActions, SET_AUTHENTICATED, SET_UNAUTHENTICATED } from "./auth.actions";

export interface State {
    isAuthenticated: boolean;
}

const initialState: State = {
    isAuthenticated: false
};

export function authReducer(state = initialState, action: AuthActions) {
    if(action.type == SET_AUTHENTICATED){
        return {
            isAuthenticated: true
        };
    } else if(action.type == SET_UNAUTHENTICATED) {
        return {
            isAuthenticated: false
        };
    } else {
        return state;
    }
}

export const getISAuth = (state: State) => state.isAuthenticated;