import { Component, OnInit, Input } from '@angular/core';

import { AnimatedButton } from '../animated-button.model';

/// https://webdeasy.de/en/top-css-buttons-en/?referer=dev-updated-f41
/// #49

@Component({
  selector: 'm-animated-download-button',
  templateUrl: './animated-download-button.component.html',
  styleUrls: ['./animated-download-button.component.scss']
})
export class AnimatedDownloadButtonComponent implements OnInit {
  @Input() btn: AnimatedButton;
  @Input() methodName: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
