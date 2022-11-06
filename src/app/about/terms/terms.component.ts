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
  subHeading: string = 'Agree or Exit!';

  constructor() { }

  ngOnInit(): void {
  }

}
