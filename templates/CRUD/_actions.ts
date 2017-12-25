import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

/**
 * Generate constants based on the given name
 * e.g export const GET_AUTH = '[Auth] Get Auth'
 */

export const GET_{{ constantCase name }} =                 '[{{ titleCase name }}] Get {{ titleCase name }}';
export const GET_{{ constantCase name }}_SUCCESS =         '[{{ titleCase name }}] Get {{ titleCase name }} Success';
export const GET_{{ constantCase name }}_FAIL =            '[{{ titleCase name }}] Get {{ titleCase name }} Fail';

export const CREATE_{{ constantCase name }} =              '[{{ titleCase name }}] Create {{ titleCase name }}';
export const CREATE_{{ constantCase name }}_SUCCESS =      '[{{ titleCase name }}] Create {{ titleCase name }} Success';
export const CREATE_{{ constantCase name }}_FAIL =         '[{{ titleCase name }}] Create {{ titleCase name }} Fail';

export const UPDATE_{{ constantCase name }} =              '[{{ titleCase name }}] Update {{ titleCase name }}';
export const UPDATE_{{ constantCase name }}_SUCCESS =      '[{{ titleCase name }}] Update {{ titleCase name }} Success';
export const UPDATE_{{ constantCase name }}_FAIL =         '[{{ titleCase name }}] Update {{ titleCase name }} Fail';

export const DELETE_{{ constantCase name }} =              '[{{ titleCase name }}] Delete {{ titleCase name }}';
export const DELETE_{{ constantCase name }}_SUCCESS =      '[{{ titleCase name }}] Delete {{ titleCase name }} Success';
export const DELETE_{{ constantCase name }}_FAIL =         '[{{ titleCase name }}] Delete {{ titleCase name }} Fail';

/**
 * Get {{ titleCase name }} Actions
 * e.g GetAuthAction
 */
export class Get{{ titleCase name }}Action implements Action {
  readonly type = GET_{{ constantCase name }};

  constructor(public payload: any) { }
}

export class Get{{ titleCase name }}SuccessAction implements Action {
  readonly type = GET_{{ constantCase name }}_SUCCESS;

  constructor(public payload: any) { }
}

export class Get{{ titleCase name }}FailAction implements Action {
  readonly type = GET_{{ constantCase name }}_FAIL;

  constructor(public error: HttpErrorResponse) { }
}

/**
 * Create {{ titleCase name }} Actions
 */
export class Create{{ titleCase name }}Action implements Action {
  readonly type = CREATE_{{ constantCase name }};

  constructor(public payload: any) { }
}

export class Create{{ titleCase name }}SuccessAction implements Action {
  readonly type = CREATE_{{ constantCase name }}_SUCCESS;

  constructor(public payload: any) { }
}

export class Create{{ titleCase name }}FailAction implements Action {
  readonly type = CREATE_{{ constantCase name }}_FAIL;

  constructor(public error: HttpErrorResponse) { }
}

/**
 * Update {{ titleCase name }} Actions
 */
export class Update{{ titleCase name }}Action implements Action {
  readonly type = UPDATE_{{ constantCase name }};

  constructor(public payload: any) { }
}

export class Update{{ titleCase name }}SuccessAction implements Action {
  readonly type = UPDATE_{{ constantCase name }}_SUCCESS;

  constructor(public payload: any) { }
}

export class Update{{ titleCase name }}FailAction implements Action {
  readonly type = UPDATE_{{ constantCase name }}_FAIL;

  constructor(public error: HttpErrorResponse) { }
}

/**
 * Delete {{ titleCase name }} Actions
 */
export class Delete{{ titleCase name }}Action implements Action {
  readonly type = DELETE_{{ constantCase name }};

  constructor(public payload: any) { }
}

export class Delete{{ titleCase name }}SuccessAction implements Action {
  readonly type = DELETE_{{ constantCase name }}_SUCCESS;

  constructor(public payload: any) { }
}

export class Delete{{ titleCase name }}FailAction implements Action {
  readonly type = DELETE_{{ constantCase name }}_FAIL;

  constructor(public error: HttpErrorResponse) { }
}

export type Actions =
  | Get{{ titleCase name }}Action
  | Get{{ titleCase name }}SuccessAction
  | Get{{ titleCase name }}FailAction
  | Create{{ titleCase name }}Action
  | Create{{ titleCase name }}FailAction
  | Create{{ titleCase name }}SuccessAction
  | Update{{ titleCase name }}Action
  | Update{{ titleCase name }}SuccessAction
  | Update{{ titleCase name }}FailAction
  | Delete{{ titleCase name }}Action
  | Delete{{ titleCase name }}SuccessAction
  | Delete{{ titleCase name }}FailAction;
