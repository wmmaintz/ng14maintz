import { Component, OnInit } from '@angular/core';
import { AnimatedButtonComponent } from '@app/core/animated-button/animated-button.component';
import { AnimatedDeleteButtonComponent } from '@app/core/animated-delete-button/animated-delete-button.component';
import { AnimatedDownloadButtonComponent } from '@app/core/animated-download-button/animated-download-button.component';
import { AnimatedIconButtonComponent }  from '@app/core/animated-icon-button/animated-icon-button.component';
import { AnimatedMoreButtonComponent } from '@app/core/animated-more-button/animated-more-button.component';
import { AnimatedSubmitButtonComponent } from '@app/core/animated-submit-button/animated-submit-button.component';


@Component({
  selector: 'm-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: [
    '../about.scss',
    './privacy.component.scss'
  ]
})
export class PrivacyComponent implements OnInit {
  heading: string = 'Privacy Statement';
  subHeading: string = 'We value your privacy!';
  version: number = 14.1;
  lastModDate: string = new Date('11/9/2022').toLocaleDateString();
  
  constructor() { }

  ngOnInit(): void {
  }

}
