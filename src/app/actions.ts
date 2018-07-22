import { Action } from '@ngrx/store';
import { Product } from './model/product';

export const FETCH_PRODUCTS = '[api] Fetch Products';
export class FetchProducts implements Action {
  type: typeof FETCH_PRODUCTS = FETCH_PRODUCTS;
}

export const FETCH_PRODUCTS_SUCCESS = '[api] Fetch Products success';
export class FetchProductsSuccess implements Action {
  type: typeof FETCH_PRODUCTS_SUCCESS = FETCH_PRODUCTS_SUCCESS;

  constructor(readonly payload: Product[]) {}
}

export const FETCH_PRODUCTS_ERROR = '[api] Fetch Products error';
export class FetchProductsError implements Action {
  type: typeof FETCH_PRODUCTS_ERROR = FETCH_PRODUCTS_ERROR;
}

export const FETCH_PRODUCT_SUCCESS = '[api] Fetch single Product success';
export class FetchProductSuccess implements Action {
  type: typeof FETCH_PRODUCT_SUCCESS = FETCH_PRODUCT_SUCCESS;

  constructor(readonly payload: Product) {}
}

export const FETCH_PRODUCT_ERROR = '[api] Fetch single Product error';
export class FetchProductError implements Action {
  type: typeof FETCH_PRODUCT_ERROR = FETCH_PRODUCT_ERROR;
}

export type All =
  | FetchProducts
  | FetchProductsSuccess
  | FetchProductsError
  | FetchProductError
  | FetchProductSuccess;
