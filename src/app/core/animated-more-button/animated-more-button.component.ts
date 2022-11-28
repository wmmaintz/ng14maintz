import { Component, OnInit, Input} from '@angular/core';

import { AnimatedButton } from '../animated-button.model';

/// https://webdeasy.de/en/top-css-buttons-en/?referer=dev-updated-f41
/// #48

@Component({
  selector: 'm-animated-more-button',
  templateUrl: './animated-more-button.component.html',
  styleUrls: ['./animated-more-button.component.scss']
})
export class AnimatedMoreButtonComponent implements OnInit {
  @Input() btn: AnimatedButton;
  
  constructor() { }

  ngOnInit(): void {
  }

}
