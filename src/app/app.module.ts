import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailGuard } from './product/product-detail.guard';
import { ProductModule } from './product/product.module';
import { RoutingModule } from './routing.module';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductModule,
    RoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
