import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  FoodsModel } from '../shared/models/food';
import { CartService } from '../shared/services/cart/cart.service';
import { FoodService } from '../shared/services/food/food.service';
import { ShaerDataService } from '../shared/services/shearComponetData/shaer-data.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
  food!: FoodsModel;
  constructor(private activateRoute: ActivatedRoute, private foodServices: FoodService, private cartService: CartService,
    private router:Router ,private shareData:ShaerDataService) {

    activateRoute.params.subscribe((params) => {
      if (params['id'])
        this.food = foodServices.getFoodById(params['id'])
        // console.log("ordered item----->", params['id'])
    })
  }

  ngOnInit(): void {
    this.shareData.setData(this.food)
  }
addToCart(){
  this.cartService.addToCart(this.food);
  this.router.navigateByUrl('/cart-page')

  var itemData=this.food
  console.log(itemData) 
}



}
