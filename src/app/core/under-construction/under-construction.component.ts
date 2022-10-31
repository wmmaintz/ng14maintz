import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'm-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.scss']
})
export class UnderConstructionComponent implements OnInit {
  underConstruction: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
