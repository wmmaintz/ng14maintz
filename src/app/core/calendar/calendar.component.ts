import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@app/shared.module';
import { MaterialModule } from '@app/material.module';
@Component({
  selector: 'm-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  disabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
