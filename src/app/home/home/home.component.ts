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
  debug: boolean = false;
  heading: string = 'Welcome to Maintz.com';
  subHeading: string = '- - -';
  isLoading: boolean = true;
  today: string = new Date().toLocaleDateString();
  sliderValue: number = 50;
  imgEntry:boolean = true;
  webpart = 'website';

  constructor(
    private router: Router
  ) {
    // this.imgEntry = false;
  }

  ngOnInit(): void {
    this.isLoading = true;
    if(this.debug) console.log(`home: ngOnInit - calling delayProcessingfor(2)`);
    this.delayProcessingfor(2, 'home.ngOnInit');
  }

  delayProcessingfor(seconds: number, methodName: string) {
    var self = this;
    let delay = seconds * 1000;
    if(this.debug) console.log(`home: from ${methodName} BEFORE delayProcessingfor(${seconds})`);
    setTimeout( function () { self.loadingComplete()}, delay);
  }

  loadingComplete() {
    if(this.debug) console.log(`home.loadingComplete - resetting isLoading to false`);
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
