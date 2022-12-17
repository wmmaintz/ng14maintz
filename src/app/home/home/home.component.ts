import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { UtilsService } from '@app/core/utils.service';


@Component({
  selector: 'm-home',
  templateUrl: './home.component.html',
  styleUrls: [
    '../home.scss',
    './home.component.scss'
  ]
})
export class HomeComponent implements OnInit {
  debug: boolean = true;
  heading: string = 'Welcome to Maintz.com';
  subHeading: string = '- - -';
  isLoading: boolean = true;
  today: string = new Date().toLocaleDateString();
  thisMonthsDate: string = '';
  sliderValue: number = 50;
  imgEntry:boolean = true;
  webpart = 'website';
  screenWidth: string = '';
  screenHeight: string = '';
  
  constructor(
    private router: Router,
    private utils: UtilsService
  ) {
    this.thisMonthsDate = this.utils.getFormattedDate('MMYYYY');
    if(this.debug) this.utils.log(`home: constructor - thisMonthsDate is [${this.thisMonthsDate}]`);
    // this.imgEntry = false;
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.screenWidth = this.utils.gebTN('body')[0].clientWidth.toString();
    this.screenHeight = this.utils.gebTN('body')[0].clientHeight.toString();
    if(this.debug) this.utils.log(`home: ngOnInit - screenWidth x Height is (${this.screenWidth}x${this.screenHeight})`);

    this.thisMonthsDate = this.utils.getFormattedDate('MMYYYY');
    if(this.debug) this.utils.log(`home: ngOnInit - thisMonthsDate is [${this.thisMonthsDate}]`);

    if(this.debug) this.utils.log(`home: ngOnInit - calling delayProcessingfor(2)`);
    this.delayProcessingfor(2, 'home.ngOnInit');
  }

  delayProcessingfor(seconds: number, methodName: string) {
    var self = this;
    let delay = seconds * 1000;
    if(this.debug) this.utils.log(`home: from ${methodName} BEFORE delayProcessingfor(${seconds})`);
    setTimeout( function () { self.loadingComplete()}, delay);
  }

  loadingComplete() {
    if(this.debug) this.utils.log(`home.loadingComplete - resetting isLoading to false`);
    this.isLoading =false;
  }

  getFormattedDate(format?: string) {
    return this.utils.getFormattedDate(format);
  }
  
  getCurrentDate() {
    return this.utils.getCurrentDate();
  }
  
  getCurrentTime() {
    return this.utils.getCurrentTime();
  }

  getCurrentTimeWithMs() {
    return this.utils.getCurrentTimeWithMs();
  }

  toggleImgHeading(){
    this.imgEntry = !this.imgEntry;
  }
  
  gotoAbout() {
    this.router.navigate(["/about"]);
  }


}
