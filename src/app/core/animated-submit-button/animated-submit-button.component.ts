import { Component, OnInit, Input } from '@angular/core';

import { AnimatedButton } from '../animated-button.model';

/// https://webdeasy.de/en/top-css-buttons-en/?referer=dev-updated-f41
/// #28

@Component({
  selector: 'm-animated-submit-button',
  templateUrl: './animated-submit-button.component.html',
  styleUrls: ['./animated-submit-button.component.scss']
})
export class AnimatedSubmitButtonComponent implements OnInit {
  @Input() btn: AnimatedButton;
  @Input() methodName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
