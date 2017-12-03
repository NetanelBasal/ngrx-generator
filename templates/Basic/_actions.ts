import { Action } from '@ngrx/store';

export const LOAD =                 '[{{ titleCase name }}] Load';
export const LOAD_SUCCESS =         '[{{ titleCase name }}] Load Success';
export const LOAD_FAIL =            '[{{ titleCase name }}] Load Fail';

/**
 * Load {{ titleCase name }} Actions
 */
export class LoadAction implements Action {
  readonly type = LOAD;

  constructor(public paylaod: any) { }
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: any) { }
}

export class LoadFailAction implements Action {
  readonly type = LOAD_FAIL;

  constructor(public error: Error) { }
}

export type Actions =
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction;