import { Component, OnInit } from '@angular/core';
import { UtilsService } from '@app/core/utils.service';
import { MatCard } from '@angular/material/card';
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
  lastModDate: string = new Date('11/9/2022').toLocaleDateString();

  // filePath: string = path.resolve("./");
  srcFile: string = 'website.component.ts';

  constructor(
    private utils: UtilsService
    ) { 
    // this.utils.log(this.filePath);
    // this.utils.log(`    filePath = [${this.filePath}]`);
    this.utils.log(this.srcFile);
    this.utils.log(`       srcFile = [ ${this.srcFile} ]`);
    this.utils.log(`srcFile exists = [ ${this.utils.fileExists(this.srcFile)} ]`);
    // let fullFileName = this.filePath + this.srcFile;
    // this.utils.log(`fullFileName = [${fullFileName}]`);
    
    
    // this.lastModDate = this.utilService.getFileDate(fullFileName);
  }

  ngOnInit(): void {
  }

}
