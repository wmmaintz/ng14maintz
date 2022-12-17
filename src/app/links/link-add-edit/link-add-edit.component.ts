import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import * as DATA from '@data/json/states.json';

@Component({
  selector: 'm-link-add-edit',
  templateUrl: './link-add-edit.component.html',
  styleUrls: [
    './link-add-edit.component.scss',
    '../links.scss'
]
})
export class LinkAddEditComponent {
  heading: string = 'Link Add/Edit';
  subHeading: string = 'Add or Edit the link to another someone in the Maintz clan.';
  isLoading:boolean = true;
  links: any[] = [];

  linkForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;

  states = DATA;
  
  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
  }
}
