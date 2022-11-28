import { Component } from '@angular/core';

@Component({
  selector: 'm-calendar-three-mon',
  templateUrl: './calendar-three-mon.component.html',
  styleUrls: ['./calendar-three-mon.component.scss']
})
export class CalendarThreeMonComponent {
  thisMm: number = 1;
  thisYy: number = 1;
  mm: string = '';
  yy: string = '';
  lastMmYy: string = '012022';
  thisMmYy: string = '012022';
  nextMmYy: string = '012022';

  constructor() {
    this.thisMm = new Date().getMonth();
    this.thisYy = new Date().getFullYear();
    // Format this months date string (MMYYYY)
    this.mm = new Date().getMonth().toString().trim();
    this.yy = new Date().getFullYear().toString().trim();
    //                                                   length : 3 (007) or 4 (0010) 
    this.thisMmYy = ('00'+this.mm).substr(('00'+this.mm).length-2,2) + this.yy;

    // Format last month's date string (MMYYYY)
    if( (this.thisMm - 1) < 1 ) {
      this.mm = '12';
      this.yy = (this.thisYy - 1).toString().trim();
    } else {
      this.mm = (this.thisMm - 1).toString().trim();
    }
    this.lastMmYy = ('00'+this.mm).substr(('00'+this.mm).length-2,2) + this.yy;

    // Format next month's date string (MMYYYY)
    if( (this.thisMm + 1) > 12){
      this.mm = '01';
      this.yy = (this.thisYy + 1).toString().trim();
    } else {
      this.mm = (this.thisMm + 1).toString().trim();
    }
    this.nextMmYy = ('00'+this.mm).substr(('00'+this.mm).length-2,2) + this.yy; 
    
    console.log(`thisMm=[${this.thisMm}]   thisYy=[${this.thisYy}]`);
    console.log(`lastMmYy=[${this.lastMmYy}]  thisMmYy=[${this.thisMmYy}]  nextMmYy=[${this.nextMmYy}]`);
  }

}
