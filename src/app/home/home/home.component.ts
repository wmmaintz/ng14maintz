import { Component, OnInit } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss'
  ]
})
export class HomeComponent implements OnInit {
  sliderValue = 50;
  
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

  constructor() { }

  ngOnInit(): void {
  }

  changeSlider(newValue:number){
    this.sliderValue = newValue;
  }
}
