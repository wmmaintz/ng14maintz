import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StatesService } from '../../accounts/states.service';
import { State } from "@app/accounts/state.model";
@Component({
  selector: 'm-video-add-edit',
  templateUrl: './video-add-edit.component.html',
  styleUrls: ['./video-add-edit.component.scss']
})
export class VideoAddEditComponent {
  isLoading:boolean = false;
  addressForm = this.fb.group({
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
    private statesService: StatesService) {
      this.states = statesService.getStates();
    }

  onSubmit(): void {
    alert('Thanks!');
  }
}
