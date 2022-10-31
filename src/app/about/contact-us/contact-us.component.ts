import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { UnderConstructionComponent } from '../../core/under-construction/under-construction.component';

@Component({
  selector: 'm-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  underConstruction: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
