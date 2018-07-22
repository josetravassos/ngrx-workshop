import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as actions from '../actions';
import { Product } from '../model/product';

import * as selectors from '../selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private readonly store: Store<{}>) {}

  ngOnInit() {
    this.products$ = this.store.select(selectors.getProducts);
  }
}
