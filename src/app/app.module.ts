import { NgModule } from '@angular/core';
import {
  MatIconModule,
  MatToolbarModule,
  MatSnackBarModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { CartDetailsModule } from './cart-details/cart-details.module';
import { CartModule } from './cart/cart.module';
import { HomeModule } from './home/home.module';
import { ProductDetailsModule } from './product-details/product-details.module';
import { reducer } from './reducer';
import { RoutingModule } from './router/routing.module';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    HomeModule,
    RoutingModule,
    CartDetailsModule,
    CartModule,
    ProductDetailsModule,
    MatIconModule,
    MatToolbarModule,
    MatSnackBarModule,
    StoreModule.forRoot({ product: reducer }),
    EffectsModule.forRoot([ProductEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 50 }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
