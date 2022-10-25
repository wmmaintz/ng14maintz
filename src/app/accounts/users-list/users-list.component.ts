import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './users-list.component.html',
  styleUrls: [
    './users-list.component.scss',
    '../accounts.scss'
  ]
})
export class UsersListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
