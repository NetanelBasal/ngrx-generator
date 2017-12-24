import * as crud from './crud.actions';
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

export function reducer(state = initialState, action: crud.Actions): State {
  switch (action.type) {
    case crud.GET: {
      return {
        ...state,
        loading: true,
        error: null,
        type: action.type
      }
    }

    case crud.GET_SUCCESS: {
      state.result = action.payload;
      return {
        ...state,
        loading: false,
        error: null,
        type: action.type
      };
    }

    case crud.GET_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.error,
        type: action.type
      };
    }

    case crud.CREATE: {
      return {
        ...state,
        loading: true,
        error: null,
        type: action.type
      }
    }

    case crud.CREATE_SUCCESS: {
      state.result = [...state.result, action.payload];
      return {
        ...state,
        loading: false,
        error: null,
        type: action.type
      };
    }

    case crud.CREATE_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.error,
        type: action.type
      };
    }

    case crud.UPDATE: {
      return {
        ...state,
        loading: true,
        error: null,
        type: action.type
      }
    }

    case crud.UPDATE_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        type: action.type
      };
    }

    case crud.UPDATE_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.error,
        type: action.type
      };
    }

    case crud.DELETE: {
      return {
        ...state,
        loading: true,
        error: null,
        type: action.type
      }
    }

    case crud.DELETE_SUCCESS: {
      state.result.splice(state.result.findIndex(action.payload), 1);
      return {
        ...state,
        loading: false,
        error: null,
        type: action.type
      };
    }

    case crud.DELETE_FAIL: {
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