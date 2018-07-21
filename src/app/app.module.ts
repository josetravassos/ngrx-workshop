import { NgModule } from '@angular/core';
import { MatIconModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { CartDetailsModule } from './cart-details/cart-details.module';
import { CartModule } from './cart/cart.module';
import { HomeModule } from './home/home.module';
import { ProductDetailsModule } from './product-details/product-details.module';
import { reducer } from './reducer';
import { RoutingModule } from './routing.module';

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
    StoreModule.forRoot({ products: reducer }),
    StoreDevtoolsModule.instrument({ maxAge: 50 }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
