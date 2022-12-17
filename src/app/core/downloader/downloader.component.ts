import { Component } from '@angular/core';
import { DownloaderService } from './downloader.service';

@Component({
  selector: 'app-downloader',
  templateUrl: './downloader.component.html',
  providers: [ DownloaderService ]
})
export class DownloaderComponent {
  file2Download: string = 'assets/logs/website.log'
  contents: string | undefined;

  constructor(private downloaderService: DownloaderService) {
    // Test this file for XCORS compatibility
    // this.file2Download = 'http://www.allbusinesscomputerservices.com/docs/Resume_Bill_Maintz_AppDev.pdf';
  }

  clear() {
    this.contents = undefined;
  }

  download() {
    this.downloaderService.getTextFile(this.file2Download)
      .subscribe(results => this.contents = results);
  }
}

