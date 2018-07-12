import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {MatCardModule} from '@angular/material';
import { StarsModule } from '../stars/stars.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    StarsModule,
    RouterModule,
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule { }
