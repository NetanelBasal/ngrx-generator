import {
    ActionReducerMap,
    ActionReducer,
    MetaReducer
} from '@ngrx/store';
import {environment} from 'environments/environment';

// -- IMPORT REDUCER --
import * as {{ camelCase name }} from './{{ folder name 'reducers' }}/{{ kebabCase name }}.reducer';

export interface State {
    // -- IMPORT STATE --
    {{ camelCase name }}: {{ camelCase name }}.State
}

export const reducers: ActionReducerMap<State> = {
    // -- ADD REDUCER --
    {{ camelCase name }}: {{ camelCase name }}.reducer
};

/** For debug purpose */
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return function (state: State, action: any): State {
        console.log('STORE state', state);
        console.log('STORE action', action);

        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
    ? [logger]
    : [];
