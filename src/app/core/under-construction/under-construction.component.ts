import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'm-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.scss']
})
export class UnderConstructionComponent implements OnInit {
  underConstruction: boolean = true;
  @Input() webpart: string = '';

  constructor() { 
  }

  ngOnInit(): void {
    console.log(`The value passed to underConstruction is [${this.webpart}]`);
  }
}
