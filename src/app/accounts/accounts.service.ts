import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  users: User[] = [];

  constructor(public httpClient: HttpClient){}
 
  getDataFromJSONFile() {
      this.httpClient.get<User[]>('@data/json/users.json').subscribe((resp) => {this.users = resp;});
  }
  
  //registerUser() {}
}
