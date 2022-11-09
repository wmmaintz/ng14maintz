import { Component, OnInit } from '@angular/core';

import { AccountsService } from '../accounts.service';
import { User } from '../user.model';

@Component({
  selector: 'm-logoff',
  templateUrl: './logoff.component.html',
  styleUrls: [
    './logoff.component.scss',
    '../accounts.scss'
  ]
})
export class LogoffComponent implements OnInit {
  heading: string = 'LOGOFF';
  subHeading: string = 'You have now been logged off of this website.';
  isLoggedIn: boolean = true;
  user: User = new User();
  constructor(
    private accountsService: AccountsService
    ) {}

  ngOnInit(): void {
    this.accountsService.logoff(this.user);
    this.isLoggedIn = this.accountsService.isLoggedIn;
  }

}
