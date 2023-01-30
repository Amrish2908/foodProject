import { Component, OnInit } from '@angular/core';

import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/cartItem';
import { CartService } from '../shared/services/cart/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  selectedQuantity:any=1
  count: any;
  constructor(private cartService: CartService) {
    this.setCart();
   }

  ngOnInit(): void {
    this.count=this.cart.totalPrice
  }
  setCart() {
    this.cart = this.cartService.getCart();
 
  }
  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }
  changeQuantity(cartItem:CartItem,event:any){
    
    const value = event.target.value;
   this.selectedQuantity = value;
    this.count=cartItem.food.price * cartItem.food.quantity
    cartItem.food.price=this.count;
    
    console.log(cartItem)
    this.cartService.changeQuantity(cartItem.food.id,cartItem.food.quantity);
    this.setCart();
      }

  postEmpolyeeDetailes() {}
}
