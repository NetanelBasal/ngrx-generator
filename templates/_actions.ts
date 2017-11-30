import { Action } from '@ngrx/store';

export const GET =                 '[{{ titleCase name }}] Get';
export const GET_SUCCESS =         '[{{ titleCase name }}] Get Success';
export const GET_FAIL =            '[{{ titleCase name }}] Get Fail';

/**
 * Get {{ titleCase name }} Actions
 */
export class GetAction implements Action {
  readonly type = GET;
}

export class GetSuccessAction implements Action {
  readonly type = GET_SUCCESS;

  constructor(public payGet: any) { }
}

export class GetFailAction implements Action {
  readonly type = GET_FAIL;

  constructor(public payGet: any) { }
}

export type Actions =
  | GetAction
  | GetSuccessAction
  | GetFailAction;