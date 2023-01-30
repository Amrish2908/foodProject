import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  postEmpolye(val: any) {
    throw new Error('Method not implemented.');
  }
baseUrl=' http://localhost:3000/posts'

  constructor(private http:HttpClient) { }
//show data 
getData(){
  this.http.get<any>(this.baseUrl).pipe((res:any)=>{
    return res;
  })
}

// Post data
postData(data:any){
 return this.http.post<any>(this.baseUrl,data).pipe((res:any)=>{
    return res
  })
}

}
