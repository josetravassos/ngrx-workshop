import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarsComponent } from './stars.component';
import { MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
  ],
  declarations: [StarsComponent],
  exports: [StarsComponent],
})
export class StarsModule { }
