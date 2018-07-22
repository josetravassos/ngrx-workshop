import { Actions, Effect, ofType } from '@ngrx/effects';
import { RatingService } from '../services/rating.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';

import * as actions from './actions';
import {
  concatMap,
  map,
  catchError,
  filter,
  withLatestFrom,
} from 'rxjs/operators';
import { RouterNavigationAction, ROUTER_NAVIGATION } from '@ngrx/router-store';
import { RouterStateUrl } from '../router/custom-router-serializer';

@Injectable()
export class RatingEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly ratingService: RatingService
  ) {}

  @Effect()
  getRating: Observable<Action> = this.actions$.pipe(
    ofType<actions.GetRating>(actions.GET_RATING),
    concatMap(({ id }) =>
      this.ratingService.getCustomerRating(id).pipe(
        map(rating => (rating ? Number(rating) : 0)),
        map(rating => new actions.GetRatingSuccess({ id, rating })),
        catchError(() => of(new actions.GetRatingError(id)))
      )
    )
  );

  @Effect()
  setRating: Observable<Action> = this.actions$.pipe(
    ofType<actions.SetRating>(actions.SET_RATING),
    concatMap(({ score }) =>
      this.ratingService.setCustomerRating(score).pipe(
        map(() => new actions.SetRatingSuccess()),
        catchError(() => of(new actions.SetRatingError(score.id)))
      )
    )
  );

  @Effect()
  fetchProduct: Observable<Action> = this.actions$.pipe(
    ofType<RouterNavigationAction<RouterStateUrl>>(ROUTER_NAVIGATION),
    filter(({ payload }) => payload.event.url.startsWith('/details/')),
    map(
      ({ payload }) => new actions.GetRating(payload.routerState.params['id'])
    )
  );
}
