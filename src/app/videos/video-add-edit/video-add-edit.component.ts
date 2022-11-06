import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { State } from "@app/accounts/state.model";

import { StatesService } from '../../accounts/states.service';
import { Video } from '../video.model';

@Component({
  selector: 'm-video-add-edit',
  templateUrl: './video-add-edit.component.html',
  styleUrls: [
    './video-add-edit.component.scss',
    '../videos.scss'
  ]
})
export class VideoAddEditComponent {
  heading: string = 'Video Add/Edit';
  subHeading: string = 'A collection of interesting videos.';
  isLoading:boolean = true;
  videos: Video[] = [];

  videoForm = this.fb.group({
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

  states: State[] = [];

  constructor(
    private fb: FormBuilder,
    private statesService: StatesService
  ) {
      this.states = statesService.getStates();
      console.log(`video-add-edit.component.ts - Loaded ${this.states.length} states`);
    }

  onSubmit(): void {
    alert('Thanks!');
  }
}
