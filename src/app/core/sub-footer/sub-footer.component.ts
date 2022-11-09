import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'm-sub-footer',
  templateUrl: './sub-footer.component.html',
  styleUrls: ['./sub-footer.component.scss']
})
export class SubFooterComponent implements OnInit {
  @Input() version = 0;
  @Input() lastModDate = "Today";

  constructor() { }

  ngOnInit(): void {
  }

}
