import { Action } from '@ngrx/store';

export const LOAD_{{ constantCase name }} =                 '[{{ titleCase name }}] Load {{ titleCase name }}';
export const LOAD_{{ constantCase name }}_SUCCESS =         '[{{ titleCase name }}] Load {{ titleCase name }} Success';
export const LOAD_{{ constantCase name }}_FAIL =            '[{{ titleCase name }}] Load {{ titleCase name }} Fail';

/**
 * Load {{ titleCase name }} Actions
 */
export class Load{{ titleCase name }}Action implements Action {
  readonly type = LOAD_{{ constantCase name }};

  constructor(public paylaod: any) { }
}

export class Load{{ titleCase name }}SuccessAction implements Action {
  readonly type = LOAD_{{ constantCase name }}_SUCCESS;

  constructor(public payload: any) { }
}

export class Load{{ titleCase name }}FailAction implements Action {
  readonly type = LOAD_{{ constantCase name }}_FAIL;

  constructor(public error: Error) { }
}

export type Actions =
  | Load{{ titleCase name }}Action
  | Load{{ titleCase name }}SuccessAction
  | Load{{ titleCase name }}FailAction;