import { Component, OnInit } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { FoodService } from '../shared/services/food/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  // @input()
  foodPageTage?: string[];
  tags: Tag[] = [];
  constructor(private fs: FoodService) { }

  ngOnInit(): void {
    if (!this.foodPageTage)
      this.tags = this.fs.getAllTag();
  }

}
