import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { filter, map, shareReplay, switchMap, tap } from 'rxjs/operators';

import { Product } from '../model/product';
import { RatingService } from '../services/rating.service';
import { Store } from '@ngrx/store';
import * as cartActions from '../cart/actions';
import * as selectors from '../selectors';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  reFetchTrigger$ = new BehaviorSubject<void>(undefined);

  product$ = this.store.select(selectors.getCurrentProduct);

  customerRating$: Observable<number> = combineLatest(
    this.product$,
    this.reFetchTrigger$,
    // We don't really care about refetch values, so we omit them.
    product => product
  ).pipe(
    // Product should exist
    filter(product => !!product),
    map(product => product.id),
    switchMap(id => this.ratingService.getCustomerRating(id)),
    // Map to numbers. If null then rating is 0, which means 'not
    // rated'
    map(rating => (rating ? Number(rating) : 0)),
    // customerRating is used in multiple places in the template.
    // let's share the context.
    shareReplay(1)
  );

  constructor(
    private readonly router: ActivatedRoute,
    private readonly ratingService: RatingService,
    private readonly store: Store<{}>,
    private readonly location: Location
  ) {}

  setRating(id: string, rating: number) {
    this.ratingService
      .setCustomerRating({
        id,
        rating,
      })
      .subscribe(() => this.reFetchTrigger$.next(undefined));
  }

  addToCart(productId: string) {
    this.store.dispatch(new cartActions.AddItem(productId));
  }

  back() {
    this.location.back();
  }
}
