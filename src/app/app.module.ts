import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {IvyCarouselModule} from 'angular-responsive-carousel'
import { FormsModule } from '@angular/forms';;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './components/product-card/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list/product-list.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { ProductDetailsComponent } from './components/product-details/product-details/product-details.component';
import { AboutComponent } from './components/about/about/about.component';
import { HomeComponent } from './components/home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductListComponent,
    NavbarComponent,
    ProductDetailsComponent,
    AboutComponent,
    HomeComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
