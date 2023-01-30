import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyNowComponent } from './buy-now/buy-now.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path: 'search/:searchItem' ,component:HomeComponent},
  {path: 'tag/:tag',component:HomeComponent},
  {path: 'food/:id',component:FoodPageComponent},
  {path: 'cart-page',component:CartPageComponent},
  {path: 'buy-now',component:BuyNowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
