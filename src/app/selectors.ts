import { createSelector } from '@ngrx/store';
import { GlobalState } from './reducer';
import * as routerSelectors from './router/selectors';
import { productAdapter } from './reducer';

const { selectAll, selectEntities } = productAdapter.getSelectors();
export const getProductState = (state: GlobalState) => state.product;

export const isProductsLoading = createSelector(
  getProductState,
  state => state.isLoading
);

const getProductsState = createSelector(
  getProductState,
  state => state.products
);

export const getProducts = createSelector(getProductsState, selectAll);

const getProductDictionary = createSelector(getProductsState, selectEntities);

export const getCurrentProduct = createSelector(
  getProductDictionary,
  routerSelectors.getRouterParam('id'),
  (products, id) => products[id]
);
