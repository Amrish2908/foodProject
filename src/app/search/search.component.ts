import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
searchItem:string=''
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      if(params['searchaitem'])
      this.searchItem=params['searchaitem']
    })
  }
  search():void{
    console.log(this.searchItem)
if(this.searchItem)
this.router.navigateByUrl('/search/'+this.searchItem)
  }

}
