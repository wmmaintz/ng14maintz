import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'm-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  @Input() mmyyyy: string = '00';
  mon: number = 0;
  yr:number = 0;
  disabled: boolean = false;
  mmmyyStr: string = '';
  m : string[] = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  targetHtml: Element;
  calendarTbl: string = '';

  constructor() { 
  }

  ngOnInit(): void {
    this.mon = parseInt(this.mmyyyy.substr(0,2));
    this.yr = parseInt(this.mmyyyy.substr(2,4));
    console.log(`The value passed to calendar is [${this.mmyyyy}]`);
    console.log(`mmyyyy=[${this.mmyyyy}]  mon=[${this.mon}] / yr=[${this.yr}]`);
    this.mmmyyStr = this.m[this.mon] + ' ' + this.mmyyyy.substr(2,4);
    this.targetHtml=document.getElementById('calendarTbl');
    console.log(`id = [${this.targetHtml.id}]`);
    // this.targetHtml.innerHTML = this.getCalendarHTML(this.mon, this.yr, false);
    this.calendarTbl = this.getCalendarHTML(this.mon, this.yr, false);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Miscellaneous Calendar functions
  //////////////////////////////////////////////////////////////////////////////

  getCalendarHTML(mo: number, yr: number, showToday: boolean){
      // mo = zero-based month number
      // yr = 4 digit year YYYY
      // showToday = true if this month's calendar is the current month and the
      // numeric representation of today should be highlighted.
    
      // Create an array containing the month names

      // Create an array with the days of the week
      const D = new Array('Sun','Mon','Tue','Wed','Thu','Fri','Sat');
      // The first of the month
      const dayOne = new Date(this.m[mo]+' 1,'+yr);
      // Determine the day of the week upon which the 1st of the month falls
      const dy = dayOne.getDay();
      
      // Days in each month
      let d = '312831303130313130313031';
      // Is this leap year?
      if (this.yr / 4 === Math.floor(this.yr / 4)) {
          d = d.substring(0, 2) + '29' + d.substring(4, d.length);
      }
      // Calculate the position in the d string for this month
      var pos = (mo * 2);
      // Grab 2 character positions representing the number of days in this month (last day)
      var ld = eval(d.substring(pos, pos + 2));
      var tday = new Date().getDate();
      var dow = new Date().getDay();
      
      // Start outputting this month's calendar
      var htmlText = '<table class="calTable"><tr>';
      // Display the month and year
      htmlText += '<th class="monHdr"';
      if(showToday){htmlText += ' hiLite';}
      htmlText += '" colspan=7 center>' + this.m[mo] + ' ' + yr + '</th></tr>';
      // Display the days of the week
      htmlText += '<tr>';
      for (var i = 0;i < 7;i ++) {
          if((i == dow) && (showToday)) {
                  htmlText += '<td class="wkdayHdr hiLite">';
              } else {
                  htmlText += '<td class="wkdayHdr">';
              }
              htmlText += D[i] + '</td>';                    // Display the days of the week
      }
      htmlText += '</tr>';
      var ctr = 0;
      // Display the day of the month or a blank if the 1st falls in mid-week
      htmlText += '<tr class="calDayRow">';
      // Display the day of the month or a blank space
      // for the first week of the month
      for (i = 0;i < 7; i++){
          if (i < dy) {
              htmlText += '<td> </td>';
          }
          else {
              ctr++;
              if((ctr == tday) && (showToday)) {
                  htmlText += '<td class="hiLite">';
              } else {
                  htmlText += '<td>';
              }
              htmlText += ctr + '</td>';
          }
      }
      htmlText += '</tr>';
      // Display the day of the month for the rest of the month
      // Display a blank after the last day of the month
      htmlText += '<tr class="calDayRow">';
      while (ctr <= ld) {
          for (i = 0;i < 7; i++){
              ctr++;
              if (ctr > ld){
                  htmlText += '<td> </td>';
              }
              else {
                  if((ctr == tday) && (showToday)) {
                      htmlText += '<td class="hiLite">';
                  } else {
                      htmlText += '<td>';
                  }
                  htmlText += ctr + '</td>';
              }
          }
          htmlText += '</tr><tr class="calDayRow">';
      }
      htmlText += '</tr></table><br class="clear" /></div>';
      return htmlText;
  }
  
  showCalender() {

  }

  showCalenders() {

      var today = new Date();                                     // today's date
      var thisMonth = today.getMonth();                           // the current month - zero-based
      var thisYear = today.getFullYear();                         // the current year
      var lastMonth = (thisMonth===0?11:thisMonth-1);             // calculate last month
      var lastYear = (thisMonth===0?thisYear-1:thisYear);         // calculate last month's year
      var nextYear = (thisMonth===11?thisYear+1:thisYear);        // next month's year
      var nextMonth = (thisMonth===11?0:thisMonth+1);             // next month

      var lastMonHtml = document.getElementById('calLastMon');
      var thisMonHtml = document.getElementById('calThisMon');
      var nextMonHtml = document.getElementById('calNextMon');
         
      if( lastMonHtml )
      {
          lastMonHtml.innerHTML = this.getCalendarHTML(lastMonth, lastYear, false);    // Send last month to screen
      }
      
      if( thisMonHtml )
      {
          thisMonHtml.innerHTML = this.getCalendarHTML(thisMonth, thisYear, true);     // Send this month to screen
      }
  
      if( nextMonHtml )
      {
          nextMonHtml.innerHTML = this.getCalendarHTML(nextMonth, nextYear, false);    // Send next month to screen
      }

  }


}
