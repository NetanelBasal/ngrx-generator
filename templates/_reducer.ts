import * as {{ camelCase name }} from '{{position "actions"}}/{{ kebabCase name }}.actions';

export interface State {
  loading: boolean;
  entities: { [id: string]: any };
  result: string[];
}

export const initialState: State = {
  loading: false,
  entities: {},
  result: []
}

export function reducer(state = initialState, action: {{ camelCase name }}.Actions): State {
  switch (action.type) {
    case {{ camelCase name }}.GET: {
      return {
        ...state,
        loading: true
      }
    }

    case {{ camelCase name }}.GET_SUCCESS: {

      return {
        ...state,
        loading: false,
      };
    }

     case {{ camelCase name }}.GET_FAIL: {

      return {
        ...state,
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
}