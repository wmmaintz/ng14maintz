import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'm-terms',
  templateUrl: './terms.component.html',
  styleUrls: [
    './terms.component.scss',
    '../about.scss'
  ]
})
export class TermsComponent implements OnInit {
  heading: string = 'Terms and Conditions';
  subHeading: string = 'Of Use!';
  version: number = 14.1;
  lastModDate: string = new Date('11/9/2022').toLocaleDateString();
  
  constructor() { }

  ngOnInit(): void {
  }

}
