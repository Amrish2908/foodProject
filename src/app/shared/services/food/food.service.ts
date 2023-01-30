import { Injectable } from '@angular/core';
import { FoodsModel } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):FoodsModel{
    debugger;
 return this.getAll().find(res=>res.id==id)!
  }

  getAllFoodByTag(tag: string): FoodsModel[] {
    return tag == "All" ?
      this.getAll() : this.getAll().filter(food => food.tags?.includes(tag))
  }
  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 14 },
      { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 2 },
      { name: 'Lunch', count: 4 },
      { name: 'SlowFood', count: 3 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 1 },
      { name: 'Burger', count: 4 },
    ];
  }
  getAll(): FoodsModel[] {
    return [
      {
        "id" : 1,
        price: 20,
        name: 'Pizza Pepperoni',
        favorite: false,
        star: 2,
        tags: ['FastFood', 'Pizza', 'Lunch'],
        imageUrl: '/assets/food-1.jpeg',
        cookTime: '10-20 ',
        origins: ['italy']
      },
      {
        id: 2,
        price: 23,
        name: 'Chicken',
        favorite: false,
        star: 4.3,
        tags: ['FastFood', 'Pizza', 'Lunch'],
        imageUrl: '/assets/food-2.jpeg',
        cookTime: '40-50 ',
        origins: ['italy'],
      }, {
        id: 3,
        price: 25,
        name: 'Burger',
        favorite: true,
        star: 5,
        tags: ['FastFood', 'burger'],
        imageUrl: '/assets/food-3.jpeg',
        cookTime: '15-20 ',
        origins: ['china'],
      },
      {
        id: 4,
        price: 20,
        name: 'Pizza',
        favorite: false,
        star: 3.5,
        tags: ['FastFood', 'Pizza', 'Lunch'],
        imageUrl: '/assets/food-4.jpeg',
        cookTime: '10-20',
        origins: ['italy'],
      },
      {
        id: 5,
        price: 20,
        name: 'Pizza Pepperoni',
        favorite: true,
        star: 4.1,
        tags: ['FastFood', 'Pizza', 'Lunch'],
        imageUrl: '/assets/food-5.jpeg',
        cookTime: '15-20',
        origins: ['italy'],
      },
      {
        id: 6,
        price: 20,
        name: 'Roll',
        favorite: false,
        star: 2,
        tags: ['FastFood', 'Roll'],
        imageUrl: '/assets/food-6.jpeg',
        cookTime: '10-20 ',
        origins: ['Japan'],
      },
      {
        id: 7,
        price: 20,
        name: 'Pizza Pepperoni',
        favorite: false,
        star: 3.5,
        tags: ['FastFood', 'Pizza', 'Lunch'],
        imageUrl: '/assets/food-7.jpeg',
        cookTime: '10-20 ',
        origins: ['italy','india'],
      },
      {
        id: 8,
        price: 20,
        name: 'Mix Chicken',
        favorite: true,
        star: 5,
        tags: ['FastFood', 'Pizza'],
        imageUrl: '/assets/food-8.jpeg',
        cookTime: '40-45 ',
        origins: ['Indian'],
      },
    ]
  }
}
