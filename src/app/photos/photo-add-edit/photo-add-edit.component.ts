import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StatesService } from '../../accounts/states.service';
import { State } from "@app/accounts/state.model";

@Component({
  selector: 'm-photo-add-edit',
  templateUrl: './photo-add-edit.component.html',
  styleUrls: [
    './photo-add-edit.component.scss',
    '../photos.scss'  
  ]
})
export class PhotoAddEditComponent {
  heading: string = 'Photo Add/Edit';
  subHeading: string = 'Add or Edit the details about a specific image.';
  isLoading:boolean = true;
  photos: any[] = [];
  sliderValue = 50;

  photoForm = this.fb.group({
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
  }

  onSubmit(): void {
    alert('Thanks!');
  }

  formatLabel(value: number | null) {
    if (!value) {
      this.sliderValue = 0;
      return 0;
    }

    if (value >= 10) {
      this.sliderValue = Math.round(value / 10) * 10;
    }

    return this.sliderValue;
  }

  changeSlider(newValue:number){
    this.sliderValue = newValue;
  }

}
