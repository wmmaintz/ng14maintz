import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
