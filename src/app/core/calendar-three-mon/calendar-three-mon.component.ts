import { Component, Input } from '@angular/core';
import { UtilsService } from '@app/core/utils.service';


@Component({
  selector: 'm-calendar-three-mon',
  templateUrl: './calendar-three-mon.component.html',
  styleUrls: ['./calendar-three-mon.component.scss']
})
export class CalendarThreeMonComponent {
  @Input()
   thisMonthsDate: string;
  
  debug=true;
  today: Date = new Date();

  lastMmYyyy: string = '';
  lastMm: string = '';
  lastYyyy: string = '';

  thisMmYyyy: string = '';
  thisMm: string = '';
  thisYyyy: string = '';

  nextMmYyyy: string = '';
  nextMm: string = '';
  nextYyyy: string = '';

  constructor(
    private utils: UtilsService
  ) {
    // Use the date passed in as the center months calendar date and compute the last and next month'c calendar from that.
    this.utils.log(`calendar-three-mon.constructor: The value passed in as thisMonthsDate was [${this.thisMonthsDate}]`);
    if ((this.thisMonthsDate === undefined) || (this.thisMonthsDate.length === 0)) {
      this.thisMonthsDate = this.utils.getFormattedDate('MMYYYY');
      this.utils.log(`calendar-three-mon.constructor: Since the value passed was undefined, setting thisMonthsDate to [${this.thisMonthsDate}]`);
    }
    this.computeDates();
  }

  ngOnInit() {
    this.utils.log(`calendar-three-mon.ngOnInit: thisMonthsDate = [${this.thisMonthsDate}]`);
  }

  computeDates(): void {
    this.utils.log(`calendar-three-mon.computeDates: thisMonthsDate = [${this.thisMonthsDate}]`);

    this.thisMm = this.thisMonthsDate.substr(0,2);
    this.thisYyyy = this.thisMonthsDate.substr(2,4);
    this.thisMmYyyy = this.thisMm + this.thisYyyy;
    if(this.debug) this.utils.log(`calendar-three-mon:computeDates - this month's MMYYYY is [${this.thisMmYyyy}]`);

    // Format last month's date string (MMYYYY)
    if( (parseInt(this.thisMm) - 1) <= 0 ) {
      this.lastMm = '12';  // Note: month number is not zero-based
      this.lastYyyy = (parseInt(this.thisYyyy) - 1).toString().trim();
    } else {
      this.lastMm = (parseInt(this.thisMm) - 1).toString().trim();
      this.lastYyyy = this.thisYyyy;
    }
    this.lastMmYyyy = this.lastMm + this.lastYyyy;
    if(this.debug) this.utils.log(`calendar-three-mon:computeDates - last month's MMYYYY is [${this.lastMmYyyy}]`);

    // Format next month's date string (MMYYYY)
    if( (parseInt(this.thisMm) + 1) > 12 ) {
      this.nextMm = '01';  // Note: month number is not zero-based
      this.nextYyyy = (parseInt(this.thisYyyy) + 1).toString().trim();
    } else {
      this.nextMm = (parseInt(this.thisMm) + 1).toString().trim();
      this.lastYyyy = this.thisYyyy;
    }
    this.nextMmYyyy = this.nextMm + this.nextYyyy;
    if(this.debug) this.utils.log(`calendar-three-mon:computeDates - next month's MMYYYY is [${this.nextMmYyyy}]`);
  }

}
