import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Product } from '../model/product';

import * as selectors from '../selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  products$: Observable<Product[]> = this.store.select(selectors.getProducts);
  loading$ = this.store.select(selectors.isProductsLoading);

  constructor(private readonly store: Store<{}>) {}
}
