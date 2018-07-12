import { Component } from '@angular/core';
import { CartService } from '../product/cart.service';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItemsCounter$ = this.cartService.cartItemsIds$.pipe(
    map(ids => ids.length),
    startWith('?'),
  );

  constructor(private readonly cartService: CartService) { }

}
