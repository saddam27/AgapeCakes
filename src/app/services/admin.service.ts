import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../models/user';
const api="http://localhost/myshopee/"
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http : HttpClient) { }
  saveData(data)
  {
    return this.http.post(api + 'addProduct.php',data);
  }
 
  
}

