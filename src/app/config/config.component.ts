import { Component } from '@angular/core';
import { Config } from './config.model';
import { ConfigService } from './config.service';

@Component({
  selector: 'm-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
  providers: [
    ConfigService
  ]
})
export class ConfigComponent {
  headers: string[] = [];
  config: Config = {
    "linksUrl": '',
    "photosUrl": '',
    "statesUrl": '',
    "usersUrl": '',
    "videosUrl": '',
    "date": ''
  };
  configError: any;
  configServiceCalled: boolean = false;

  constructor(
    private configService: ConfigService
  ) {
    this.loadConfig();
  };

  clear() {
    this.config = undefined;
    this.configError = undefined;
    this.configServiceCalled = false;
    this.headers = [];
  }

  loadConfig() {
    this.configServiceCalled = false;
    this.configService.getConfig()
      .subscribe({
        next: (data: Config) => this.config = { ...data }, // success path
        error: error => this.configError = error // error path
      });
    this.configServiceCalled = true;
  }

  getConfig() {
    return this.config;
  }

  getConfigResponse() {
    this.configServiceCalled = false;
    this.configService.getConfigResponse()
      // resp is of type `HttpResponse<Config[]>`
      .subscribe(resp => {
        // display its headers
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);
        this.config = { ...resp.body! };
      });
    this.configServiceCalled = true;
  }

  makeConfigError() {
    this.configService.makeIntentionalError().subscribe({ error: error => this.configError = error.message });
  }

  getType(val: any): string {
    return val instanceof Date ? 'date' : Array.isArray(val) ? 'array' : typeof val;
  }
  
}
