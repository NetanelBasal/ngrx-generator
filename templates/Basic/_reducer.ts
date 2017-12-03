import * as {{ camelCase name }} from '{{position "actions"}}/{{ kebabCase name }}.actions';

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

export function reducer(state = initialState, action: {{ camelCase name }}.Actions): State {
  switch (action.type) {
    case {{ camelCase name }}.LOAD: {
      return {
        ...state,
        loading: true,
        error: null,
        type: action.type
      }
    }

    case {{ camelCase name }}.LOAD_SUCCESS: {
      state.result = action.payload;
      return {
        ...state,
        loading: false,
        error: null,
        type: action.type
      };
    }

    case {{ camelCase name }}.LOAD_FAIL: {
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