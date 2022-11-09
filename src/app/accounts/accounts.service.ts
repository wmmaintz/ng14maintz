import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model'
import * as USERS from '@data/json/users.json';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  users: User[] = USERS;
  email: string = null;
  isLoggedIn: boolean = false;

  constructor(
    public httpClient: HttpClient
    ){}
 
  getDataFromJSONFile() {
      this.httpClient.get<User[]>('@data/json/users.json').subscribe((resp) => {this.users = resp;});
  }
  
  isloggedIn(user: User) {
    if(user.email && user.email === 'wmmaintz@gmail.com') {
      return true;
    } else {
      return false;
    }
  }
  
  login(user?: User): User {
    if(user) { 
      return this.users[0];
    } else {
      return new User();
    }
  }

  logoff(user?: User){
    if(user) {
      user = new User();
    }
  }
  //registerUser() {}
}
