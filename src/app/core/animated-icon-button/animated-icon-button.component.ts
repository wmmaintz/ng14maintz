import { Component, OnInit, Input } from '@angular/core';

/// https://webdeasy.de/en/top-css-buttons-en/?referer=dev-updated-f41
/// #14

@Component({
  selector: 'm-animated-icon-button',
  templateUrl: './animated-icon-button.component.html',
  styleUrls: ['./animated-icon-button.component.scss']
})
export class AnimatedIconButtonComponent implements OnInit {
@Input() icon: string = "home";
@Input() iconColor: string = "green";

  constructor() { }

  ngOnInit(): void {
  }

  acknowledgeButtonPress(btnName) {
    alert(`The ${btnName} was just pressed.`)
  }

  buttonPressed(btnName: string) {
    this.acknowledgeButtonPress(btnName);
  }
  
}
