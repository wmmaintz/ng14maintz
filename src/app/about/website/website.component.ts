import { Component, OnInit } from '@angular/core';
import { UtilsService } from '@app/core/utils.service';
// import * as path from 'path';

@Component({
  selector: 'm-website',
  templateUrl: './website.component.html',
  styleUrls: [
    './website.component.scss',
    '../about.scss'
  ]
})
export class WebsiteComponent implements OnInit {
  heading: string = 'About The Website';
  subHeading: string = 'Technical information regarding this website\'s construction.';
  version: number = 14.1;
  lastModDate: Date = new Date('');
  // filePath: string = path.resolve("./");
  srcFile: string = 'website.component.ts';

  constructor(private utilService: UtilsService) { 
    // console.log(this.filePath);
    // console.log(`    filePath = [${this.filePath}]`);
    console.log(this.srcFile);
    console.log(`     srcFile = [${this.srcFile}]`);
    // let fullFileName = this.filePath + this.srcFile;
    // console.log(`fullFileName = [${fullFileName}]`);
    
    
    // this.lastModDate = this.utilService.getFileDate(fullFileName);
  }

  ngOnInit(): void {
  }

}
