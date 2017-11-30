import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export const GET =                 '[{{ titleCase name }}] Get';
export const GET_SUCCESS =         '[{{ titleCase name }}] Get Success';
export const GET_FAIL =            '[{{ titleCase name }}] Get Fail';

export const CREATE =              '[{{ titleCase name }}] Create';
export const CREATE_SUCCESS =      '[{{ titleCase name }}] Create Success';
export const CREATE_FAIL =         '[{{ titleCase name }}] Create Fail';

export const DELETE =              '[{{ titleCase name }}] Delete';
export const DELETE_SUCCESS =      '[{{ titleCase name }}] Delete Success';
export const DELETE_FAIL =         '[{{ titleCase name }}] Delete Fail';

/**
 * Get {{ titleCase name }} Actions
 */
export class GetAction implements Action {
  readonly type = GET;

  constructor(public paylaod: any) { }
}

export class GetSuccessAction implements Action {
  readonly type = GET_SUCCESS;

  constructor(public payload: any) { }
}

export class GetFailAction implements Action {
  readonly type = GET_FAIL;

  constructor(public error: HttpErrorResponse) { }
}

/**
 * Create {{ titleCase name }} Actions
 */
export class CreateAction implements Action {
  readonly type = CREATE;

  constructor(public payload: any) { }
}

export class CreateSuccessAction implements Action {
  readonly type = CREATE_SUCCESS;

  constructor(public payload: any) { }
}

export class CreateFailAction implements Action {
  readonly type = CREATE_FAIL;

  constructor(public error: HttpErrorResponse) { }
}

/**
 * Delete {{ titleCase name }} Actions
 */
export class DeleteAction implements Action {
  readonly type = DELETE;

  constructor(public payload: any) { }
}

export class DeleteSuccessAction implements Action {
  readonly type = DELETE_SUCCESS;

  constructor(public payload: any) { }
}

export class DeleteFailAction implements Action {
  readonly type = DELETE_FAIL;

  constructor(public error: HttpErrorResponse) { }
}

export type Actions =
  | GetAction
  | GetSuccessAction
  | GetFailAction
  | CreateAction
  | CreateFailAction
  | CreateSuccessAction
  | DeleteAction
  | DeleteSuccessAction
  | DeleteFailAction;