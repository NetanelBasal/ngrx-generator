import * as {{ camelCase name }} from '{{position "actions"}}/{{ lowerCase name }}.actions';

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
    case {{ camelCase name }}.LOAD: {
      return {
        ...state,
        loading: true
      }
    }

    case {{ camelCase name }}.LOAD_SUCCESS: {

      return {
        ...state,
        loading: false,
      };
    }

     case {{ camelCase name }}.LOAD_FAIL: {

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