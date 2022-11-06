import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'm-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: [
    './privacy.component.scss',
    '../about.scss'
  ]
})
export class PrivacyComponent implements OnInit {
  heading: string = 'Privacy Statement';
  subHeading: string = 'We value your privacy!';

  constructor() { }

  ngOnInit(): void {
  }

}
