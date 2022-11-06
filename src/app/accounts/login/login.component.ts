import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'm-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.scss',
    '../accounts.scss'
  ]
})
export class LoginComponent implements OnInit {
  heading: string = 'LOGIN';
  subHeading: string = 'Provide your email address and password to fully access this website.';

  constructor() { }

  ngOnInit(): void {
  }

}
