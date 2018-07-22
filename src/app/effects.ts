import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of, defer } from 'rxjs';
import { map, switchMap, catchError, filter } from 'rxjs/operators';

import * as actions from './actions';
import { ProductService } from './services/product.service';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { RouterNavigationAction, ROUTER_NAVIGATION } from '@ngrx/router-store';
import { RouterStateUrl } from './router/custom-router-serializer';

@Injectable()
export class ProductEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly productService: ProductService,
    private readonly snackBar: MatSnackBar
  ) {}

  @Effect()
  fetchProducts: Observable<Action> = this.actions$.pipe(
    ofType<actions.FetchProducts>(actions.FETCH_PRODUCTS),
    switchMap(() =>
      this.productService.getProducts().pipe(
        map(products => new actions.FetchProductsSuccess(products)),
        catchError(() => of(new actions.FetchProductsError()))
      )
    )
  );

  @Effect()
  fetchProduct: Observable<Action> = this.actions$.pipe(
    ofType<RouterNavigationAction<RouterStateUrl>>(ROUTER_NAVIGATION),
    filter(({ payload }) => payload.event.url.startsWith('/details/')),
    switchMap(({ payload }) =>
      this.productService.getProduct(payload.routerState.params['id']).pipe(
        map(product => new actions.FetchProductSuccess(product)),
        catchError(() => of(new actions.FetchProductError()))
      )
    )
  );

  @Effect({ dispatch: false })
  handleFetchError = this.actions$.pipe(
    ofType<actions.FetchProductsError>(actions.FETCH_PRODUCTS_ERROR),
    map(() => {
      // Setting the timeout, so that angular would re-run change detection.
      setTimeout(
        () =>
          this.snackBar.open('Error fetching products', 'Error', {
            duration: 2500,
          }),
        0
      );
    })
  );

  @Effect()
  refetchProduct: Observable<Action> = this.actions$.pipe(
    ofType<RouterNavigationAction<RouterStateUrl>>(ROUTER_NAVIGATION),
    filter(({ payload }) => payload.event.url === '/home'),
    map(() => new actions.FetchProducts())
  );

  @Effect()
  init$: Observable<Action> = defer(() => of(new actions.FetchProducts()));
}
