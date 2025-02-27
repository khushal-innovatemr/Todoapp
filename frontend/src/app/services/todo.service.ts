import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  readonly Root;
  constructor(private http :HttpClient) {
    this.Root = 'http://localhost:3001/'
   }

  get(uri:string){
    return this.http.get(this.Root+uri);
  } 

  post(uri:string,payload:object){
    return this.http.post(this.Root+uri,payload)
  }

  delete(uri:string,payload:object){
    console.log(uri);
    console.log(this.Root+uri);
    return this.http.delete(this.Root+uri,payload)
  }

  put(uri:string,payload:object){
    return this.http.put(this.Root+uri,payload)
  }
}
