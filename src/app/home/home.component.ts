import { Component, OnInit } from '@angular/core';
import { FoodsModel } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../shared/services/food/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods: FoodsModel[] = [];
  constructor(private fs: FoodService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.router.params.subscribe(params => {
      if (params['searchItem'])
        this.foods = this.fs.getAll().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      else if (params['tag'])
        this.foods = this.fs.getAllFoodByTag(params['tag'])
      else
        this.foods = this.fs.getAll();
      console.log(this.foods)
    })
  }
}
