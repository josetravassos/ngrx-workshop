import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details.component';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { StarsModule } from '../stars/stars.module';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    StarsModule,
  ],
  declarations: [ProductDetailsComponent]
})
export class ProductDetailsModule { }
