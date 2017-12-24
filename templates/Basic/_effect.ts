import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { {{properCase name }}Service } from '{{position "services"}}/{{ kebabCase name }}.service';
import * as {{ camelCase name }}Actions from '{{position "actions"}}/{{ kebabCase name }}.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class {{ properCase name }}Effects {
  @Effect() load$;
  
  constructor(
    private {{ camelCase name }}Service: {{ properCase name }}Service,
    private actions$: Actions
  ) {
    this.load$ = this.actions$
      .ofType({{ camelCase name }}Actions.LOAD_{{ constantCase name }})
      .switchMap((state: {{ camelCase name }}Actions.Load{{ titleCase name }}Action) => this.{{ camelCase name }}Service.load{{ titleCase name }}()
        // If successful, dispatch success action with result
        .map(res => new {{ camelCase name }}Actions.Load{{ titleCase name }}SuccessAction(res))
        // If request fails, dispatch failed action
        .catch((err: Error) => Observable.of(new {{ camelCase name }}Actions.Load{{ titleCase name }}FailAction(err)))
      );
  }

}
