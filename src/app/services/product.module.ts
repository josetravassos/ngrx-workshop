import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {ProductService} from './product.service';
import {RatingService} from './rating.service';
import {StorageService} from './storage.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    ProductService,
    RatingService,
    StorageService,
  ]
})
export class ProductModule {}
