import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  readonly Root;
  constructor(private http :HttpClient) {
    this.Root = 'https://todoapp-sigma-seven.vercel.app/'
   }

  get(uri:string){
    return this.http.get(this.Root+uri,{ withCredentials: true });
  } 

  post(uri: string, payload: object) {
    return this.http.post(this.Root + uri, payload, { withCredentials: true });
  }
  
  delete(uri: string, payload: object) {
    return this.http.delete(this.Root + uri, { body: payload, withCredentials: true });
  }
  
  put(uri: string, payload: object) {
    return this.http.put(this.Root + uri, payload, { withCredentials: true });
  }
  
}
