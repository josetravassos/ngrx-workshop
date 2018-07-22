import { Action } from '@ngrx/store';

import * as actions from './actions';
import { Product } from './model/product';

export interface GlobalState {
  products: ProductState;
}

export type ProductState = Product[];
const initState: ProductState = [];

export function reducer(
  state: ProductState = initState,
  action: actions.All
): ProductState {
  switch (action.type) {
    case actions.FETCH_PRODUCTS_SUCCESS: {
      return action.payload;
    }
    case actions.FETCH_PRODUCT_SUCCESS: {
      const indexOfProduct = state.findIndex(p => p.id === action.payload.id);
      // Remove old one and replace with single product fetch,
      state.splice(indexOfProduct, 1, action.payload);
      // Make it immutable.
      return [...state];
    }
    default: {
      return state;
    }
  }
}
