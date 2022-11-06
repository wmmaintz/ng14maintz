import { Component, OnInit } from '@angular/core';

import { SharedModule } from '../../shared.module';
import { UnderConstructionComponent } from '@app/core/under-construction/under-construction.component';

@Component({
  selector: 'm-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: [
    './contact-us.component.scss',
    '../about.scss'
  ]
})
export class ContactUsComponent implements OnInit {
  heading: string = 'Contact-Us';
  subHeading: string = 'Communicate with the website administrator.';

  
  constructor() { }

  ngOnInit(): void {
  }

}
