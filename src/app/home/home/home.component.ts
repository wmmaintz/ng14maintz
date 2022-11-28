import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from "@angular/router";


@Component({
  selector: 'm-home',
  templateUrl: './home.component.html',
  styleUrls: [
    '../home.scss',
    './home.component.scss'
  ]
})
export class HomeComponent implements OnInit {
  heading: string = 'Welcome to Maintz.com';
  subHeading: string = new Date().toLocaleDateString();
  isLoading: boolean = true;
  timeNow: string = new Date().toString();
  sliderValue: number = 50;
  imgEntry:boolean = true;
  webpart = 'website';

  constructor(
    private router: Router
  ) {}

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

  toggleImgHeading(){
    this.imgEntry = !this.imgEntry;
  }
  
  gotoAbout() {
    this.router.navigate(["/about"]);
  }


}
