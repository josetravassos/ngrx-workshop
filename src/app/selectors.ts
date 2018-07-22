import { createSelector } from '@ngrx/store';
import { GlobalState } from './reducer';
import * as routerSelectors from './router/selectors';
import { productAdapter } from './reducer';

const { selectAll, selectEntities } = productAdapter.getSelectors();
export const getProductsState = (state: GlobalState) => state.products;

export const getProducts = createSelector(getProductsState, selectAll);

export const getCurrentProduct = createSelector(
  selectEntities,
  routerSelectors.getRouterParam('id'),
  (products, id) => products[id]
);
