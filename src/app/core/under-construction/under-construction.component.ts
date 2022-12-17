import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from '@app/core/utils.service';


@Component({
  selector: 'm-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.scss']
})
export class UnderConstructionComponent implements OnInit {
  underConstruction: boolean = true;
  @Input() webpart: string = '';

  constructor(
    private utils: UtilsService) { 
  }

  ngOnInit(): void {
    this.utils.log(`under-construction: The value passed is [${this.webpart}]`);
  }
}
