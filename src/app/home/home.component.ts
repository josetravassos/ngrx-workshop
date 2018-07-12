import { Component, OnInit } from '@angular/core';
import {data} from '../product/product-data';
import { Product } from '../model/product';
import { ProductService } from '../product/product.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private readonly productService: ProductService) { }

  ngOnInit() {
    this.products$ = this.productService.getProducts();
  }

}
