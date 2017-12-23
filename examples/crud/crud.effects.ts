import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http';
import { CrudService } from './crud.service';
import * as crudActions from './crud.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CrudEffects {
  @Effect() get$;
  @Effect() create$;
  @Effect() update$;
  @Effect() delete$;
  
  constructor(
    private crudService: CrudService,
    private actions$: Actions
  ) {
    this.get$ = this.actions$
      .ofType(crudActions.GET)
      .switchMap((state: crudActions.GetAction) => this.crudService.get()
        // If successful, dispatch success action with result
        .map(res => new crudActions.GetSuccessAction(res))
        // If request fails, dispatch failed action
        .catch((err: HttpErrorResponse) => Observable.of(new crudActions.GetFailAction(err)))
      );

    this.create$ = this.actions$
      .ofType(crudActions.CREATE)
      .switchMap((state: crudActions.CreateAction) => this.crudService.create(state.payload)
        .map(res => new crudActions.CreateSuccessAction(res))
        .catch((err: HttpErrorResponse) => Observable.of(new crudActions.CreateFailAction(err)))
      );

    this.update$ = this.actions$
      .ofType(crudActions.UPDATE)
      .switchMap((state: crudActions.UpdateAction) => this.crudService.update(state.payload)
        .map(res => new crudActions.UpdateSuccessAction(res))
        .catch((err: HttpErrorResponse) => Observable.of(new crudActions.UpdateFailAction(err)))
      );

    this.delete$ = this.actions$
      .ofType(crudActions.DELETE)
      .switchMap((state: crudActions.DeleteAction) => this.crudService.delete(state.payload)
        .map(res => new crudActions.DeleteSuccessAction(res))
        .catch((err: HttpErrorResponse) => Observable.of(new crudActions.DeleteFailAction(err)))
      );
  }

}