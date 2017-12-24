import { Action } from '@ngrx/store';

export const LOAD =                 '[Basic] Load';
export const LOAD_SUCCESS =         '[Basic] Load Success';
export const LOAD_FAIL =            '[Basic] Load Fail';

/**
 * Load Basic Actions
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