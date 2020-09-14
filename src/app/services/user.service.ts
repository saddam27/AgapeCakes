import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http : HttpClient) { }
  createUser(user){
    return this.http.post("  http://localhost:5555/userdata/",user)
    }

}

