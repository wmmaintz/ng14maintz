import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { SharedModule } from '@app/shared.module';

import { Observable, catchError, of } from "rxjs";
import { map } from "rxjs/operators";

import { Moment } from 'moment';
import * as path from 'path';
// import * as fs from 'fs';
import { promises as fsPromises } from 'fs';

import { JsonParser } from '../interceptors/custom-json.interceptor';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  debug: boolean = false;
  url: string = './';
  
  constructor(
    private httpClient: HttpClient
  ) { 
    if(this.debug) this.log(`utils.service: url[${this.url}] exists=[${this.fileExists(this.url)}]`)
  }

  public log(logMsg: string): void {
    if(logMsg) console.log(`${this.getCurrentTimeWithMs()} : ${logMsg}`);
  }

  public urlExists(url: string): Observable<boolean> {
    
    if(this.debug) this.log(`utils.service: rulExists(${url})`);
    return this.httpClient.get(url).pipe(map(() => true), catchError(() => of(false)));
  }

  public fileExists(fullPathName: string) {
    // if(fs.existsSync(fullPathName)) {
        return true;
    // }
    return false;
  }

  getFileDate(fullfilename): Date {
    let fileDate = new Date();
    return fileDate;
  }

  getFormattedDate(format?: string): any {
    // a : AM or PM
    // CCC or ccc : Weekday abbreviation  -  c or h : numeric day of week
    // d : Numeric day of month - dd : zero-filled numeric day of the month
    // E : Weekday abbreviation
    // fullDate : i.e. Saturday, December 3, 2022
    // G : AD/BC
    // H or h : Hour of the day - hh : zero-filled hour of the day
    // LLL : Month abbreviation - LL : number of month
    // MMM : Month abbreviation - MM : zero-filled number of month
    // O : Time zone
    // m : Month number - mm : zero-filled month number
    // SSS : Milliseconds - s or ss : 1 or 2 digit number of seconds
    // W : Number of weeks from January 1 of the year
    // Y, y, YYYY or yyyy : 4 digit year - yy or YY : 2 digit year    
    // Z : 4 digit number of hours and minutes from GMT
    // z : Time zone in UTC format (i.e. GMT-6)
    if(format.length === 0) { format = 'YYYY-MM-dd';}
    const datepipe: DatePipe = new DatePipe('en-US');
    let formattedDate = datepipe.transform(new Date(), format);
    return formattedDate;
  }

  getCurrentDate() {
    return new Date().toLocaleDateString();
  }

  getCurrentTime() {
    return new Date().getTime();
  }

  getCurrentTimeWithMs() {
    const datepipe: DatePipe = new DatePipe('en-US');
    let formattedDate = datepipe.transform(new Date(), 'MM-dd-YYYY HH:mm:ss.SSS');
    return formattedDate?.toString();

    // Return the date and time in this format:
    // YYYY-MM-DDTHH:mm:ss.fffZ 
    // const DATE_TIME_FORMAT = 'YYYY-MM-DDTHH:mm:ss.fffZ'
    // return (new Date(), DATE_TIME_FORMAT);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Gather Screen Size Information
  //////////////////////////////////////////////////////////////////////////////

  gebID(id){
      return document.getElementById(id); 
  }
  
  gebTN(tagName){
      return document.getElementsByTagName(tagName);
  }
  
  setStyleToTags(tagName, styleString){
      var tags = this.gebTN(tagName);
      for( var i = 0; i<tags.length; i++ )
          tags[i].setAttribute('style', styleString);
  }
  
  testSizes(parentObj){
      if( parentObj === null){ parentObj = 'body'; }
      
      this.gebID( 'screen.Width' ).innerHTML = screen.width.toString();
      this.gebID( 'screen.Height' ).innerHTML = screen.height.toString();

      this.gebID( 'window.Width' ).innerHTML = window.innerWidth.toString();
      this.gebID( 'window.Height' ).innerHTML = window.innerHeight.toString();

      this.gebID( 'documentElement.Width' ).innerHTML = document.documentElement.clientWidth.toString();
      this.gebID( 'documentElement.Height' ).innerHTML = document.documentElement.clientHeight.toString();

      this.gebID( 'body.Width' ).innerHTML = this.gebTN(parentObj)[0].clientWidth.toString();
      this.gebID( 'body.Height' ).innerHTML = this.gebTN(parentObj)[0].clientHeight.toString();
  }

  displaySizes(parentObj) {
      if( parentObj === null){ parentObj = 'body'; }
      var table = document.createElement('table');
      table.innerHTML = '<tr><th>SOURCE</th><th>WIDTH</th><th>x</th><th>HEIGHT</th></tr>' +
      '<tr><td>screen</td><td id=\'screen.Width\' /><td>x</td><td id=\'screen.Height\' /></tr>' +
      '<tr><td>window</td><td id=\'window.Width\' /><td>x</td><td id=\'window.Height\' /></tr>' +
      '<tr><td>document<br>.documentElement</td><td id=\'documentElement.Width\' /><td>x</td>'+
      '<td id=\'documentElement.Height\' /></tr>' +
      '<tr><td>document.body</td><td id=\'body.Width\' /><td>x</td><td id=\'body.Height\' /></tr>';

      this.gebTN(parentObj)[0].appendChild( table );

      this.setStyleToTags('table',
                  'border: 2px solid black !important; position: fixed !important;' +
                  'left: 100px !important; top: 90px !important; padding:5px !important;' +
                  'width: 200px !important; font-size:10px; !important' +
                  'white-space: pre !important; font-family: monospace !important;' +
                  'z-index: 9999 !important;background: white !important;'
      );
      this.setStyleToTags('td', 'color: black !important; border: none !important; padding: 5px !important; text-align:center !important;');
      this.setStyleToTags('th', 'color: black !important; border: none !important; padding: 5px !important; text-align:center !important;');

      table.style.setProperty( 'margin-left', '-'+( table.clientWidth / 2 )+'px' );

      setInterval( this.testSizes, 200 );
  }

  sortByKey(array, key) {
      return array.sort(function(a, b) {
          var x = a[key]; var y = b[key];
          return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      });
  }

  multObjArray2Array(multObjArray){
      //console.debug('multObjArray');
      //console.debug(multObjArray);
      var allArray = [];
      for(var i=0; i<multObjArray.length; i++)
      {
          for(var j=0; j<multObjArray[i].length;j++)
          {
              allArray.push( multObjArray[i][j] );
              //console.debug('\tAdding ' + multObjArray[i][j]);
          }
      }
      return allArray;
  }

  JSONDateToDateObj (jd) { // jd = JSON Date format ie. '2013-03-08T14:34:00:000Z'
      if( (jd.length != 24) ||  (jd.substr(4,1) != '-') ||  (jd.substr(7,1) != '-') ||  (jd.substr(10,1) != 'T') ||  (jd.substr(13,1) != ':') ||  (jd.substr(16,1) != ':') ||  (jd.substr(19,1) != ':') ||  (jd.substr(23,1) != 'Z') ) {
          return null;
      }
      var d = new Date();
      d.setFullYear(jd.substr(0,4), jd.substr(5,2)-1, jd.substr(8,2));
      d.setHours(jd.substr(11,2));
      d.setMinutes(jd.substr(14,2));
      d.setSeconds(jd.substr(17,2));
      d.setMilliseconds(jd.substr(20,3));
      return d;
  }

  editImageData(imgID) {
      alert('I\'m sorry, you don\'t have the authority to edit image ID#' + imgID + '.');
  }

  deleteImage(imgID){
      alert('I\'m sorry, you don\'t have the authority to delete image ID#' + imgID + '.');
  }

  enlargeToggle(imgID){
      alert('Enlarge image ID#' + imgID + '.');
  }

  resizePage() {
      $( document ).ready(function() {
          this.log( 'resizePage: resize screen on load!' );
          var newHeight = window.innerHeight - 100;
          $( '#photoCarousel' ).css( 'height', newHeight );
      });
  }

  if(debug){
      this.log('utils.service.ts methods defined');
  }

  
}
