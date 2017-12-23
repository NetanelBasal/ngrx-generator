import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export const GET =                 '[Crud] Get';
export const GET_SUCCESS =         '[Crud] Get Success';
export const GET_FAIL =            '[Crud] Get Fail';

export const CREATE =              '[Crud] Create';
export const CREATE_SUCCESS =      '[Crud] Create Success';
export const CREATE_FAIL =         '[Crud] Create Fail';

export const UPDATE =              '[Crud] Update';
export const UPDATE_SUCCESS =      '[Crud] Update Success';
export const UPDATE_FAIL =         '[Crud] Update Fail';

export const DELETE =              '[Crud] Delete';
export const DELETE_SUCCESS =      '[Crud] Delete Success';
export const DELETE_FAIL =         '[Crud] Delete Fail';

/**
 * Get Crud Actions
 */
export class GetAction implements Action {
  readonly type = GET;

  constructor(public payload: any) { }
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
 * Create Crud Actions
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
 * Update Crud Actions
 */
export class UpdateAction implements Action {
  readonly type = UPDATE;

  constructor(public payload: any) { }
}

export class UpdateSuccessAction implements Action {
  readonly type = UPDATE_SUCCESS;

  constructor(public payload: any) { }
}

export class UpdateFailAction implements Action {
  readonly type = UPDATE_FAIL;

  constructor(public error: HttpErrorResponse) { }
}

/**
 * Delete Crud Actions
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
  | UpdateAction
  | UpdateSuccessAction
  | UpdateFailAction
  | DeleteAction
  | DeleteSuccessAction
  | DeleteFailAction;