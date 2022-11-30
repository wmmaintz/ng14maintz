import { Component } from '@angular/core';

@Component({
  selector: 'm-calendar-three-mon',
  templateUrl: './calendar-three-mon.component.html',
  styleUrls: ['./calendar-three-mon.component.scss']
})
export class CalendarThreeMonComponent {
  debug=true;
  // Create an array containing the month names
  months = new Array(
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' );
  // Create an array with the days of the week
  weekdays = new Array('Sun','Mon','Tue','Wed','Thu','Fri','Sat');
  // Days in each month
  daysomon = '312831303130313130313031';

  thisMm: number = 1;
  thisDd: number = 1;
  thisYy: number = 1;
  mm: string = '';
  yy: string = '';
  lastMmmYyyy: string = '';
  thisMmmYyyy: string = '';
  nextMmmYyyy: string = '';

  constructor() {
    this.thisMm = new Date().getMonth();
    this.thisDd = new Date().getMonth();
    this.thisYy = new Date().getFullYear();
    if(this.debug) console.log(`calendar-three-mon: today = [${this.thisMm}/${this.thisDd}/${this.thisYy}]`);
  }

  ngOnInit(): void {
    this.thisMmmYyyy = this.months[this.thisMm] + ' ' + this.thisYy.toString(); 

    // Format last month's date string (MMYYYY)
    if( (this.thisMm - 1) < 1 ) {
      this.mm = '12';
      this.yy = (this.thisYy - 1).toString().trim();
    } else {
      this.mm = (this.thisMm - 1).toString().trim();
    }
    this.lastMmmYyyy = this.months[parseInt(this.mm)] + ' ' + this.thisYy.toString();

    // Format next month's date string (MMYYYY)
    if( (this.thisMm + 1) > 12){
      this.mm = '01';
      this.yy = (this.thisYy + 1).toString().trim();
    } else {
      this.mm = (this.thisMm + 1).toString().trim();
    }
    this.nextMmmYyyy = this.months[parseInt(this.mm)] + ' ' + this.thisYy.toString(); 
    
    this.showCalenders(this.thisMm, this.thisYy);
  }

  getCalendarHTML(mo: number, yr: number, showToday: boolean){
    // mo = zero-based month number
    // yr = 4 digit year YYYY
    // showToday = true if this month's calendar is the current month and the
    // numeric representation of today should be highlighted.
    if(this.debug) console.log(`calendar-three-mon: getCalendarHTML(${mo}, ${yr}, ${showToday})`);
  
    // The first of the month
    const dayOne = new Date(this.months[mo]+' 1,'+yr);
    if(this.debug) console.log(`calendar-three-mon: dayOne=[${dayOne}]`);
  
    // Determine the day of the week upon which the 1st of the month falls
    const dy = dayOne.getDay();
    if(this.debug) console.log(`calendar-three-mon: dy=[${dy}]`);
  
    // Is this leap year?
    if (this.thisYy / 4 === Math.floor(this.thisYy / 4)) {
        this.daysomon = this.daysomon.substring(0, 2) + '29' + this.daysomon.substring(4, this.daysomon.length);
    }
    if(this.debug) console.log(`calendar-three-mon: daysomon=[${this.daysomon}]`);

    // Calculate the position in the daysomon string for this month
    var pos = (mo * 2);
    if(this.debug) console.log(`calendar-three-mon: pos=[${pos}]`);

    // Grab 2 character positions representing the number of days in this month (last day)
    var ld = eval(this.daysomon.substring(pos, pos + 2));
    var tday = new Date().getDate();
    var dow = new Date().getDay();
    // if(this.debug) 
    console.log(`calendar-three-mon: mo/ld=[${mo}/${ld}] tday=[${tday}] dow=[${dow}]\n`);
    
    // Start outputting this month's calendar
    var htmlText = '<table class="calTable"><tr>';
    // Show the days of the week
    for (var i = 0;i < 7;i ++) {
      if((i == dow) && (showToday)) {
        if(this.debug && showToday) console.log(`calendar-three-mon: Highlighting weekday [${this.weekdays[i]}]`);
        htmlText += '<td class="wkdayHdr hiLite">';
      } else {
        htmlText += '<td class="wkdayHdr">';
      }
      htmlText += this.weekdays[i] + '</td>';                    // Display the days of the week
    }
    htmlText += '</tr>';
    var ctr = 0;
    // Display the day of the month or a blank if the 1st falls in mid-week
    htmlText += '<tr class="calDayRow">';
    // Display the day of the month or a blank space
    // for the first week of the month
    for (i = 0;i < 7; i++){
      // if(this.debug && showToday) console.log(`calendar-three-mon: first for loop: i=[${i}], dow=[${dow}], showToday=[${showToday}],`);
        if (i < dy) {
            htmlText += '<td> </td>';
        }
        else {
            ctr++;
            if(this.debug && showToday) console.log(`calendar-three-mon: first for loop: ctr=[${ctr}] tday=[${tday}]`);
            if((ctr == tday) && (showToday)) {
                htmlText += '<td class=\'hiLite\'>';
                // if(this.debug && showToday) 
                console.log(`calendar-three-mon: Hhilighting ctr=[${ctr}] tday=[${tday}]`);
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
            // if(this.debug && showToday) console.log(`calendar-three-mon: while loop: ctr=[${ctr}] tday=[${tday}]`);
            if (ctr > ld){
                htmlText += '<td> </td>';
            }
            else {
                if((ctr == tday) && (showToday)) {
                    htmlText += '<td class="hiLite">';
                    if(this.debug && showToday) console.log(`calendar-three-mon: while loop: hilighting ctr=[${ctr}] tday=[${tday}]`);
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

  showCalenders(thisMonth: number, thisYear: number) {
    // if( this.debug ) console.log(`calendar-three-mon: showCalenders  [${thisMonth}] [${thisYear}]`);
    var lastMonth = (thisMonth===0?11:thisMonth-1);             // calculate last month
    var lastYear = (thisMonth===0?thisYear-1:thisYear);         // calculate last month's year
    var nextYear = (thisMonth===11?thisYear+1:thisYear);        // next month's year
    var nextMonth = (thisMonth===11?0:thisMonth+1);             // next month

    var lastMonHtml = document.getElementById('calLastMon');
    var thisMonHtml = document.getElementById('calThisMon');
    var nextMonHtml = document.getElementById('calNextMon');
       
    if( lastMonHtml )
    {
      lastMonHtml.innerHTML = this.getCalendarHTML(lastMonth, lastYear, false);
    }
    
    if( thisMonHtml )
    {
      thisMonHtml.innerHTML = this.getCalendarHTML(thisMonth, thisYear, true); 
    }

    if( nextMonHtml )
    {
      nextMonHtml.innerHTML = this.getCalendarHTML(nextMonth, nextYear, false);
    }

  }

}
