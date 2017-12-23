import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { BasicService } from './basic.service';
import * as basicActions from './basic.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BasicEffects {
  @Effect() load$;
  
  constructor(
    private basicService: BasicService,
    private actions$: Actions
  ) {
    this.load$ = this.actions$
      .ofType(basicActions.LOAD)
      .switchMap((state: basicActions.LoadAction) => this.basicService.load()
        // If successful, dispatch success action with result
        .map(res => new basicActions.LoadSuccessAction(res))
        // If request fails, dispatch failed action
        .catch((err: Error) => Observable.of(new basicActions.LoadFailAction(err)))
      );
  }

}