import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Config } from '@app/config/config.model';
import { ConfigService } from '@app/config/config.service';

@Component({
  selector: 'm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ConfigService]
})
export class AppComponent {
  title = 'ng14maintz';
  config: Config;
  configError: string = '';

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService
  ) { 
    // Load the configuration data for use by other services when needed.
    this.configService.getConfig()
      .subscribe({
        next: (data: Config) => this.config = { ...data }, // success path
        error: error => this.configError = error // error path
      });
    // while ( this.config.photosUrl == undefined ) {
    //   setTimeout(() => {
    //     console.log('waiting for config');
    //   }, 1000);
    // }
    if( this.config !== undefined ) {
      console.log(`photos.service.constructor - config.photosUrl = ${this.config.photosUrl}`);
    }
  }

}
