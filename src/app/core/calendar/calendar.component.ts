import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from '@app/core/utils.service';
import { nextTick } from 'process';
import { CalDay } from './calday.model';

@Component({
  selector: 'm-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
    @Input() mmyyyy: string = '000000';
    debug=true;
    // Should today's date and weekday be highlighted on this calendar?
    showToday=false;
    // Create an array containing the month names
    monAbbrevs = new Array(
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' );
    // Create an array with the days of the week
    weekdays = new Array('Sun','Mon','Tue','Wed','Thu','Fri','Sat');
    weekday: number = 0; 
    // Days in each month
    daysomon = '312831303130313130313031';
    today: Date = new Date();
    dom: number = 0;
    calDays: CalDay[] = [];
    fd: number = 0; // the first day of the month
    ld: number = 0; // The last day of the month
    m: number = 0;
    y: number = 0;
    thisMm: number = 1;
    thisDd: number = 1;
    thisYy: number = 1;
    mmmyy: string = '';


    constructor(
        private utils: UtilsService
    ) { 
        this.utils.log(`\n\n\n\ncalendar: The mmyyyy value passed into calendar is [${this.mmyyyy}]`);
        if(this.mmyyyy === '000000') this.mmyyyy = this.utils.getFormattedDate('MMYYYY');
        // using the falue passed in as input (mmyyyy), make sure it's 6 digits long
        let paddedStr: string = ("000000" + this.mmyyyy);
        paddedStr = paddedStr.substr(paddedStr.length-6, 6);
        if(this.debug) this.utils.log(`calendar: paddedStr = [${paddedStr}]`);
        
        // now parse out the month and year from the padded string
        this.m  = parseInt(paddedStr.substr(0,2));
        this.y = parseInt(paddedStr.substr(2,4));
        if((this.m < 1) || (this.m > 12)) {
            this.m = 1;
            this.utils.log(`calendar: Resetting the month to Jan - paddedStr month was [${paddedStr.substr(0,2)}]`);
        }
        
        // Now grab the current month and year numbers from today
        this.thisMm = this.today.getMonth(); // zero-based
        this.thisYy = this.today.getFullYear(); // NOT zero-based
        this.thisDd = this.today.getDate().valueOf(); // NOT zero-based
        if(this.debug) this.utils.log(`calendar: today = [${this.thisMm+1}/${this.thisDd}/${this.thisYy}]`);
        if(this.debug) this.utils.log(`calendar: mmyyyy=[${this.mmyyyy}]  mm=[${this.m}] / yyyy=[${this.y}]`);

        // Determine if the calendar being redendered is the current month and year
        if(((this.thisMm + 1) === this.m) && (this.thisYy === this.y)) {
            // If the calendar being rendered is this month's calendar, 
            // highlight the current day and day of the week.
            this.showToday = true;
            this.utils.log(`calendar: Since ${this.thisMm + 1} = ${this.m} and ${this.thisYy} = ${this.y}, hilite today, ${this.m}/${this.thisDd}/${this.thisYy}.`);
        } else {
            this.thisDd = 1;
        }

        this.showCalender(this.thisMm, this.thisDd, this.thisYy);
    }

    ngOnInit(): void {
        window.onload = () => {
            this.hiliteDay(this.thisDd, this.weekday) 
        }
    }

    //////////////////////////////////////////////////////////////////////////////
    // Miscellaneous Calendar functions
    //////////////////////////////////////////////////////////////////////////////

    // mm is a zero-based number
    showCalender(mm: number, dd: number, yyyy: number) {
        this.mmmyy = this.monAbbrevs[mm] + ' ' + this.mmyyyy.substr(2,4);
        this.utils.log(`calendar: mmmyy=[${this.mmmyy}]`);
            
        // mm = zero-based month number
        // dd = zero or today's day of the month (if current month)
        // yyyy = 4 digit year YYYY
        // showToday = true if this month's calendar is the current month and the
        // numeric representation of today should be highlighted.
        
        // The first of this month
        const dayOne = new Date(this.monAbbrevs[mm]+' 1,' + yyyy);
        this.utils.log(`calendar: dayOne=[${dayOne}]`);
        // Determine the day of the week upon which the 1st of the month falls
        this.fd = dayOne.getDay();
        this.utils.log(`calendar: fd=[${this.fd}]`);
        this.weekday = this.today.getDay();
        this.utils.log(`calendar: weekday=[${this.weekday}]`);
        const dow = this.weekdays[this.weekday];
        this.utils.log(`calendar: dow=[${dow}]`);
        // Is this leap year?
        if (this.y / 4 === Math.floor(this.y / 4)) {
            this.daysomon = this.daysomon.substring(0, 2) + '29' + this.daysomon.substring(4, this.daysomon.length);
            this.utils.log(`calendar: This IS a leap year so daysomon=[${this.daysomon}]`);
        } else {
            this.utils.log(`calendar: This is NOT a leap year so daysomon=[${this.daysomon}]`);
        }
        // Calculate the position in the d string for this month
        const pos = (mm * 2);
        this.utils.log(`calendar: the position in the daysomon str for this month is =[${pos}]&[${pos+1}]`);
        // Grab 2 character positions representing the number of days in this month (last day)
        this.ld = eval(this.daysomon.substring(pos, pos + 2));
        this.utils.log(`calendar: ld=[${this.ld}] is the last day of the month`);

        let dayCntr = 1;
        for(let idx: number = 0; idx < 42; idx++) {
            let c = new CalDay(' ',false);
            if((idx<this.fd) || ( dayCntr > this.ld)) {
                this.calDays.push(c);
                continue;
            }
            if(this.showToday && ((this.thisDd) === dayCntr)) c.hiLite = true;
            c.display = (dayCntr++).toString();
            this.calDays.push(c);
        }
        // Highlight today's date and the weekday
        if(this.showToday) {
            // weekday is the today's numeric day of the week
            // dow is the text abbrev for the day of the week and the id of the DOM element
            // dd is the current day of the month

            if((dd>1) && (dd<this.ld)) this.calDays[this.fd+dd-1].hiLite = true;
            window.onload = () => {
                this.hiliteDay(dd, this.weekday);
            }
        }
    }
    
    // dom = day of month (1-31), dow = weekday of week (0-6)
    hiliteDay(dom: number, dow: number) {
        // Highlight the day of the week
        if((dow>=0) && (dow<7)) {
            try {
                let el = document.getElementById(this.weekdays[dow]);
                this.utils.log(`calendar: el.id=[${el.id}]`);
                el.classList.add('hiLite');
                this.utils.log(`calendar: el.classList.contains('hiLite')=${el.classList.contains('hiLite')}]`);
            }
            catch (e) {
                this.utils.log(`ERROR: ${e.message}`);
            }
        }
        // Highlight the day of the month
        if((dom>=1) && (dom<=this.ld)) {
            this.calDays[this.fd + dom - 1].hiLite = true;
            this.utils.log(`calendar: calDays[${this.fd + dom - 1}].hiLite=${this.calDays[this.fd + dom - 1].hiLite}]`);
            try {
                let el = document.getElementById(`cell`+(this.fd + dom));
                this.utils.log(`calendar: el.id=[${el.id}]`);
                el.classList.add('hiLite');
                this.utils.log(`calendar: el.classList.contains('hiLite')=${el.classList.contains('hiLite')}]`);
            }
            catch (e) {
                this.utils.log(`ERROR: ${e.message}`);
            }
        }
    }

    dumpCalTable(c: CalDay[], ld:number, weekday:number): void {
        if(this.debug) this.utils.log(`calendar.dumpCalTable: ld = ${ld}\tweekday = ${weekday}\tc.length = ${c.length}`);
        if(c.length === 0) {
            this.utils.log(`calendar.dumpCalTable: ERROR: *** The calendar has no content - c.length=${c.length} ***`);
            return;
        }
        for(let i=0; i<42; i++) {
            let row = Math.floor(i/7);
            let col = i%7;
            if(this.debug) this.utils.log(`calendar: c[${i}]: r[${row}]c[${col}][${this.weekdays[col]}] c.display[${c[i].display}]`);
        }
    }
}
