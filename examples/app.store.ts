import {
    ActionReducerMap,
    ActionReducer,
    MetaReducer
} from '@ngrx/store';
import {environment} from 'environments/environment';

// -- IMPORT REDUCER --
import * as crud from './crud/crud.reducer';
import * as basic from './basic/basic.reducer';

export interface State {
    // -- IMPORT STATE --
	crud: crud.State;
    basic: basic.State;
}

export const reducers: ActionReducerMap<State> = {
    // -- ADD REDUCER --
	crud: crud.reducer,
    basic: basic.reducer
};

/** For debug purpose */
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return function (state: State, action: any): State {
        console.groupCollapsed(action.type);
        const nextState = reducer(state, action);
        console.log(`%c previous state`, `color: #9E9E9E; font-weight: bold`, state);
        console.log(`%c action`, `color: #03A9F4; font-weight: bold`, action);
        console.log(`%c next state`, `color: #4CAF50; font-weight: bold`, nextState);
        console.groupEnd();
        return nextState;
    };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
    ? [logger]
    : [];
