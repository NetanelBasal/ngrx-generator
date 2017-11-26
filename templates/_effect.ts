import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { {{properCase name }}Service } from '{{position "services"}}/{{ lowerCase name }}.service';
import * as {{ camelCase name }} from '{{position "actions"}}/{{ lowerCase name }}.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class {{ properCase name }}Effects {
  constructor(
    private {{ camelCase name }}Service: {{ properCase name }}Service,
    private actions$: Actions
  ) { }

  @Effect() get$ = this.actions$
      .ofType({{ camelCase name }}.LOAD)
      .switchMap(payload => this.{{ camelCase name }}Service.get()
        // If successful, dispatch success action with result
        .map(res => ({ type: {{ camelCase name }}.LOAD_SUCCESS, payload: res }))
        // If request fails, dispatch failed action
        .catch(() => Observable.of({ type: {{ camelCase name }}.LOAD_FAIL}))
      );
}