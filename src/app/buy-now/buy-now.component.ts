import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/service/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FoodPageComponent } from '../food-page/food-page.component';
import { ShaerDataService } from '../shared/services/shearComponetData/shaer-data.service';
// import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-buy-now',
  templateUrl: './buy-now.component.html',
  styleUrls: ['./buy-now.component.css']
})
export class BuyNowComponent implements OnInit {
  newdata: any = ' ';
  food!: string;
  allItems!: string[];
  constructor(private api: ApiService, private shareData: ShaerDataService) { }

  ngOnInit(): void {
    this.food = this.shareData.getData()
    this.allItems.push(this.food);
    console.log(this.allItems)
    // console.log("buy Now is call==========>",this.food)
  }

  registerForm = new FormGroup({
    firstname: new FormControl("", [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]),
    lastname: new FormControl("", [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]),
    email: new FormControl("", [Validators.required, Validators.email]),
    mobile: new FormControl("", [Validators.required, Validators.pattern("[0-9]*"), Validators.maxLength(10), Validators.minLength(10)]),
    gender: new FormControl("", [Validators.required,]),
  });

  get FirstName(): FormControl { return this.registerForm.get("firstname") as FormControl; }
  get LastName(): FormControl { return this.registerForm.get("lastname") as FormControl; }
  get Email(): FormControl { return this.registerForm.get("email") as FormControl; }
  get Mobile(): FormControl { return this.registerForm.get("mobile") as FormControl; }
  get Gender(): FormControl { return this.registerForm.get("gender") as FormControl; }


  registerSubmited() {
    let model = {
      data: {
        userData: this.registerForm.value,
        cartData: this.food
      }
    }
    console.log(model)
    this.api.postData(model).subscribe({
      next: (res) => {
        var newdata = res;
        alert("data added successfully")
      }, error: (err) => {
        console.log(err)

      }
    })
  }

}
