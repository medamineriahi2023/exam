import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {DetailsOfferComponent} from "./details-offer/details-offer.component";

const routes: Routes = [

  {path:'', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'details/:id', component:DetailsOfferComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
