import { Injectable } from '@angular/core';
import {Observable, of, defer} from 'rxjs';
import {delay, filter} from 'rxjs/operators';
import { Product } from '../model/product';
import { data } from './product-data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    return defer(() => of(data).pipe(
      delay(1 * 1000),
    ));
  }

  getProduct(id: string): Observable<Product> {
    const product = data.find(p => p.id === id);
    return defer(() => of(product).pipe(
      delay(1 * 1000),
    ));
  }
}
