import * as {{ camelCase name }} from '{{position "actions"}}/{{ kebabCase name }}.actions';
import { HttpErrorResponse } from '@angular/common/http';

export interface State {
  loading: boolean;
  entities: { [id: string]: any };
  result: string[];
  error: HttpErrorResponse;
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
    case {{ camelCase name }}.GET: {
      return {
        ...state,
        loading: true,
        error: null,
        type: action.type
      }
    }

    case {{ camelCase name }}.GET_SUCCESS: {
      state.result = action.payload;
      return {
        ...state,
        loading: false,
        error: null,
        type: action.type
      };
    }

    case {{ camelCase name }}.GET_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.error,
        type: action.type
      };
    }

    case {{ camelCase name }}.CREATE: {
      return {
        ...state,
        loading: true,
        error: null,
        type: action.type
      }
    }

    case {{ camelCase name }}.CREATE_SUCCESS: {
      state.result = [...state.result, action.payload];
      return {
        ...state,
        loading: false,
        error: null,
        type: action.type
      };
    }

    case {{ camelCase name }}.CREATE_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.error,
        type: action.type
      };
    }

    case {{ camelCase name }}.UPDATE: {
      return {
        ...state,
        loading: true,
        error: null,
        type: action.type
      }
    }

    case {{ camelCase name }}.UPDATE_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        type: action.type
      };
    }

    case {{ camelCase name }}.UPDATE_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.error,
        type: action.type
      };
    }

    case {{ camelCase name }}.DELETE: {
      return {
        ...state,
        loading: true,
        error: null,
        type: action.type
      }
    }

    case {{ camelCase name }}.DELETE_SUCCESS: {
      state.result.splice(state.result.findIndex(action.payload), 1);
      return {
        ...state,
        loading: false,
        error: null,
        type: action.type
      };
    }

    case {{ camelCase name }}.DELETE_FAIL: {
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