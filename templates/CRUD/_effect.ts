import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http';
import { {{properCase name }}Service } from '{{position "services"}}/{{ kebabCase name }}.service';
import * as {{ camelCase name }}Actions from '{{position "actions"}}/{{ kebabCase name }}.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class {{ properCase name }}Effects {
  @Effect() get$;
  @Effect() create$;
  @Effect() update$;
  @Effect() delete$;
  
  constructor(
    private {{ camelCase name }}Service: {{ properCase name }}Service,
    private actions$: Actions
  ) {
    this.get$ = this.actions$
      .ofType({{ camelCase name }}Actions.GET)
      .switchMap((state: {{ camelCase name }}Actions.GetAction) => this.{{ camelCase name }}Service.get()
        // If successful, dispatch success action with result
        .map(res => new {{ camelCase name }}Actions.GetSuccessAction(res))
        // If request fails, dispatch failed action
        .catch((err: HttpErrorResponse) => Observable.of(new {{ camelCase name }}Actions.GetFailAction(err)))
      );

    this.create$ = this.actions$
      .ofType({{ camelCase name }}Actions.CREATE)
      .switchMap((state: {{ camelCase name }}Actions.CreateAction) => this.{{ camelCase name}}Service.create(state.payload)
        .map(res => new {{ camelCase name }}Actions.CreateSuccessAction(res))
        .catch((err: HttpErrorResponse) => Observable.of(new {{ camelCase name }}Actions.CreateFailAction(err)))
      );

    this.update$ = this.actions$
      .ofType({{ camelCase name }}Actions.UPDATE)
      .switchMap((state: {{ camelCase name }}Actions.UpdateAction) => this.{{ camelCase name }}Service.update(state.payload)
        .map(res => new {{ camelCase name }}Actions.UpdateSuccessAction(res))
        .catch((err: HttpErrorResponse) => Observable.of(new {{ camelCase name }}Actions.UpdateFailAction(err)))
      );

    this.delete$ = this.actions$
      .ofType({{ camelCase name }}Actions.DELETE)
      .switchMap((state: {{ camelCase name }}Actions.DeleteAction) => this.{{ camelCase name }}Service.delete(state.payload)
        .map(res => new {{ camelCase name }}Actions.DeleteSuccessAction(res))
        .catch((err: HttpErrorResponse) => Observable.of(new {{ camelCase name }}Actions.DeleteFailAction(err)))
      );
  }

}