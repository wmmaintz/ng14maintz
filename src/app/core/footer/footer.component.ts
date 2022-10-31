import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'm-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear: string = new Date().getFullYear().toString();
  
  constructor() { }

  ngOnInit(): void {
  }

}
