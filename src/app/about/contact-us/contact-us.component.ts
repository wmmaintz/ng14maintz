import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { SharedModule } from '../../shared.module';
import { UtilsService } from '@app/core/utils.service';
import { UnderConstructionComponent } from '@app/core/under-construction/under-construction.component';
import * as DATA from '@data/json/states.json';
import { JsonParser } from '../../interceptors/custom-json.interceptor';

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
  version: number = 14.1;
  lastModDate: string = new Date('11/9/2022').toLocaleDateString();
  states = DATA;

  form = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [0, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    recipient: ['admin', Validators.required]
  });

  hasUnitNumber = false;

  constructor(
    private utils: UtilsService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.states = DATA;
    this.utils.log(`contact-us.component.ngOnInit - states.length = ${this.states.length}`);
  }

  onSubmit(): void {
    alert('Contact Information Form Submitted!');
  }
}
