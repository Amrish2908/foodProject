import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShaerDataService {

  data!: string;
  constructor() { }
  
  setData(idData: any){
 this.data=idData
  }
  getData(){
    return this.data
  }
}
