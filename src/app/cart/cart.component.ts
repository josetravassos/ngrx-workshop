import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as selectors from './selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cartItemsCounter$ = this.store.select(selectors.getCartItemsCount);

  constructor(private readonly store: Store<{}>) {}
}
