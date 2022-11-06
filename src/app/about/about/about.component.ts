import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'm-about',
  templateUrl: './about.component.html',
  styleUrls: [
    './about.component.scss',
    '../about.scss'
  ]
})
export class AboutComponent implements OnInit {
  heading: string = 'About Maintz.com';
  subHeading: string = 'Background Information.';

  constructor() { }

  ngOnInit(): void {
  }

}
