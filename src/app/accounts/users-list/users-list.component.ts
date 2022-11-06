import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'm-user-list',
  templateUrl: './users-list.component.html',
  styleUrls: [
    './users-list.component.scss',
    '../accounts.scss'
  ]
})
export class UsersListComponent implements OnInit {
  heading: string = 'Users List';
  subHeading: string = 'A list of registered users.';
  isLoading:boolean = true;
  users: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
