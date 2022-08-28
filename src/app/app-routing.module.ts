import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AdminDashBoardComponent } from './components/admin-dash-board/admin-dash-board.component';
import { ChooseCarComponent } from './components/choose-car/choose-car.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  { path : '', redirectTo: 'home', pathMatch: 'full' }, //default that redirects and empty path to home component
  { path : 'home' , component : HomePageComponent},
  { path : 'about', component : AboutUsComponent},
  {path : 'choose' , component : ChooseCarComponent},
  {path: 'admin', component : AdminDashBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
