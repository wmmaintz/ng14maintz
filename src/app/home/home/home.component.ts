import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { timeout, timer } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'm-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss',
    '../home.scss'
  ]
})
export class HomeComponent implements OnInit {
  heading: string = 'Home Screen';
  subHeading: string = 'Welcome to Maintz.com.';
  isLoading: boolean = true;
  timeNow: string = new Date().toString();
  sliderValue: number = 50;
  
  constructor() {  }

  ngOnInit(): void {
    this.isLoading = true;
    console.log(`${this.getCurrentTime()}: ngOnInit - calling delayProcessingfor(2)`);
    this.delayProcessingfor(2, 'ngOnInit');
  }

  delayProcessingfor(seconds: number, methodName: string) {
    var self = this;
    let delay = seconds * 1000;
    console.log(`${this.getCurrentTime()}: from ${methodName} BEFORE delayProcessingfor(${seconds})`);
    setTimeout( function () { self.loadingComplete()}, delay);

  }

  loadingComplete() {
    console.log(`${this.getCurrentTime()}: loadingComplete - resetting isLoading to false`);
    this.isLoading =false;
  }

  getCurrentTime() {
    const datepipe: DatePipe = new DatePipe('en-US');
    let formattedDate = datepipe.transform(new Date(), 'MM-dd-YYYY HH:mm:ss:ms');
    return formattedDate?.toString();
  }

}
