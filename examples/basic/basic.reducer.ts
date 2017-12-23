import * as basic from './basic.actions';

export interface State {
  loading: boolean;
  entities: { [id: string]: any };
  result: string[];
  error: Error;
  type: string;
}

export const initialState: State = {
  loading: false,
  entities: {},
  result: [],
  error: null,
  type: ''
}

export function reducer(state = initialState, action: basic.Actions): State {
  switch (action.type) {
    case basic.LOAD: {
      return {
        ...state,
        loading: true,
        error: null,
        type: action.type
      }
    }

    case basic.LOAD_SUCCESS: {
      state.result = action.payload;
      return {
        ...state,
        loading: false,
        error: null,
        type: action.type
      };
    }

    case basic.LOAD_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.error,
        type: action.type
      };
    }

    default: {
      return state;
    }
  }
}