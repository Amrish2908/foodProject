import { Injectable } from '@angular/core';
import { Cart } from '../../models/Cart';
import { CartItem } from '../../models/cartItem';
import { FoodsModel } from '../../models/food';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  static addToCart() {
    throw new Error('Method not implemented.');
  }
private cart:Cart=new Cart()

  addToCart(food:FoodsModel):void{
    let cartItem=this.cart.items.find((item: { food: { id: any; }; })=>item.food.id===food.id)
    if(cartItem){
      this.changeQuantity(food.id,cartItem.quantity+1)
      return;
    }
    this.cart.items.push(new CartItem(food))
  }

  removeFromCart(foodId:number):void{
    this.cart.items=this.cart.items.filter((item: { food: { id: number; }; })=>item.food.id!=foodId)
  }

  changeQuantity(quantity:number,foodId:number){
    let cartItem=this.cart.items.find((item: { food: { id: number; }; })=>item.food.id===foodId);
    if(!cartItem)return;
    cartItem.quantity=quantity; 
  }

  getCart():Cart{
    return this.cart
    console.log(this.cart)
  }
}
