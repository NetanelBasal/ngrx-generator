import * as {{ camelCase name }} from '{{position "actions"}}/{{ kebabCase name }}.actions';
import { HttpErrorResponse } from '@angular/common/http';

export interface State {
  loading: boolean;
  entities: { [id: string]: any };
  result: string[];
  error: HttpErrorResponse;
  type: string;
};

export const initialState: State = {
  loading: false,
  entities: {},
  result: [],
  error: null,
  type: ''
};

export function reducer(state = initialState, action: {{ camelCase name }}.Actions): State {
  switch (action.type) {
    case {{ camelCase name }}.GET_{{ constantCase name }}: {
      return {
        ...state,
        loading: true,
        error: null,
        type: action.type
      }
    }

    case {{ camelCase name }}.GET_{{ constantCase name }}_SUCCESS: {
      state.result = action.payload;
      return {
        ...state,
        loading: false,
        error: null,
        type: action.type
      };
    }

    case {{ camelCase name }}.GET_{{ constantCase name }}_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.error,
        type: action.type
      };
    }

    case {{ camelCase name }}.CREATE_{{ constantCase name }}: {
      return {
        ...state,
        loading: true,
        error: null,
        type: action.type
      }
    }

    case {{ camelCase name }}.CREATE_{{ constantCase name }}_SUCCESS: {
      state.result = [...state.result, action.payload];
      return {
        ...state,
        loading: false,
        error: null,
        type: action.type
      };
    }

    case {{ camelCase name }}.CREATE_{{ constantCase name }}_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.error,
        type: action.type
      };
    }

    case {{ camelCase name }}.UPDATE_{{ constantCase name }}: {
      return {
        ...state,
        loading: true,
        error: null,
        type: action.type
      }
    }

    case {{ camelCase name }}.UPDATE_{{ constantCase name }}_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        type: action.type
      };
    }

    case {{ camelCase name }}.UPDATE_{{ constantCase name }}_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.error,
        type: action.type
      };
    }

    case {{ camelCase name }}.DELETE_{{ constantCase name }}: {
      return {
        ...state,
        loading: true,
        error: null,
        type: action.type
      }
    }

    case {{ camelCase name }}.DELETE_{{ constantCase name }}_SUCCESS: {
      state.result.splice(state.result.findIndex(action.payload), 1);
      return {
        ...state,
        loading: false,
        error: null,
        type: action.type
      };
    }

    case {{ camelCase name }}.DELETE_{{ constantCase name }}_FAIL: {
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
