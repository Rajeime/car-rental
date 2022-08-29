import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SlideShowComponent } from './components/slide-show/slide-show.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RentalFormComponent } from './components/rental-form/rental-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarsComponent } from './components/cars/cars.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ChooseCarComponent } from './components/choose-car/choose-car.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FooterComponent } from './components/footer/footer.component';
import { AdminDashBoardComponent } from './components/admin-dash-board/admin-dash-board.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SlideShowComponent,
    NavbarComponent,
    RentalFormComponent,
    CarsComponent,
    AboutUsComponent,
    ChooseCarComponent,
    FooterComponent,
    AdminDashBoardComponent,
    OrderSummaryComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
