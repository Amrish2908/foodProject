import { NumberSymbol } from "@angular/common";
import { tick } from "@angular/core/testing";
import { FoodsModel } from "./food";

export class CartItem {
    constructor(food: FoodsModel) {
        this.food = food
        // this.price
    }
    food: FoodsModel;
    quantity: number = 1;
    get price():number{
        return this.food.price * this.quantity;
    }
}