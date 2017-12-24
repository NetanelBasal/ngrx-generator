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
      .ofType({{ camelCase name }}Actions.GET_{{ constantCase name }})
      .switchMap((state: {{ camelCase name }}Actions.Get{{ titleCase name }}Action) => this.{{ camelCase name }}Service.get{{ titleCase name }}()
        // If successful, dispatch success action with result
        .map(res => new {{ camelCase name }}Actions.Get{{ titleCase name }}SuccessAction(res))
        // If request fails, dispatch failed action
        .catch((err: HttpErrorResponse) => Observable.of(new {{ camelCase name }}Actions.Get{{ titleCase name }}FailAction(err)))
      );

    this.create$ = this.actions$
      .ofType({{ camelCase name }}Actions.CREATE_{{ constantCase name }})
      .switchMap((state: {{ camelCase name }}Actions.Create{{ titleCase name }}Action) => this.{{ camelCase name}}Service.create{{ titleCase name }}(state.payload)
        .map(res => new {{ camelCase name }}Actions.Create{{ titleCase name }}SuccessAction(res))
        .catch((err: HttpErrorResponse) => Observable.of(new {{ camelCase name }}Actions.Create{{ titleCase name }}FailAction(err)))
      );

    this.update$ = this.actions$
      .ofType({{ camelCase name }}Actions.UPDATE_{{ constantCase name }})
      .switchMap((state: {{ camelCase name }}Actions.Update{{ titleCase name }}Action) => this.{{ camelCase name }}Service.update{{ titleCase name }}(state.payload)
        .map(res => new {{ camelCase name }}Actions.Update{{ titleCase name }}SuccessAction(res))
        .catch((err: HttpErrorResponse) => Observable.of(new {{ camelCase name }}Actions.Update{{ titleCase name }}FailAction(err)))
      );

    this.delete$ = this.actions$
      .ofType({{ camelCase name }}Actions.DELETE_{{ constantCase name }})
      .switchMap((state: {{ camelCase name }}Actions.Delete{{ titleCase name }}Action) => this.{{ camelCase name }}Service.delete{{ titleCase name }}(state.payload)
        .map(res => new {{ camelCase name }}Actions.Delete{{ titleCase name }}SuccessAction(res))
        .catch((err: HttpErrorResponse) => Observable.of(new {{ camelCase name }}Actions.Delete{{ titleCase name }}FailAction(err)))
      );
  }

}
