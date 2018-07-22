import { Actions, Effect, ofType } from '@ngrx/effects';
import { CartService } from '../services/cart.service';
import { Action } from '@ngrx/store';
import { Observable, defer, of } from 'rxjs';

import * as cartActions from './actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class CartEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly cartService: CartService
  ) {}

  @Effect()
  fetchCartItems: Observable<Action> = this.actions$.pipe(
    ofType<cartActions.FetchCartItems>(cartActions.FETCH_CART_ITEMS),
    switchMap(() =>
      this.cartService.getCartItems().pipe(
        map(itemsIds => new cartActions.FetchCartItemsSuccess(itemsIds)),
        catchError(() => of(new cartActions.FetchCartItemsError()))
      )
    )
  );

  @Effect()
  init$: Observable<Action> = defer(() => of(new cartActions.FetchCartItems()));
}
