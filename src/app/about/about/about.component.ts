import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'm-about',
  templateUrl: './about.component.html',
  styleUrls: [
    './about.component.scss',
    '../about.scss'
  ]
})
export class AboutComponent implements OnInit {
  heading: string = 'About Maintz.com';
  subHeading: string = 'Background Information.';
  version: number = 14.1;
  lastModDate: string = new Date('11/9/2022').toLocaleDateString();

  // filePath: string = path.resolve("./");
  srcFile: string = 'about.component.ts';

  constructor() {
    console.log('About Component - constructor');
  }

  ngOnInit(): void {
    console.log('About Component - ngOnInit');
  }

}
