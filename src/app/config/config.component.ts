import { Component } from '@angular/core';
import { Config } from './config.model';
import { ConfigService } from './config.service';
import { UtilsService } from '@app/core/utils.service';


@Component({
  selector: 'm-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
  providers: [ ConfigService ]
})
export class ConfigComponent {
  debug: boolean = true;
  heading: string = 'Config Heading';
  subHeading: string = 'Config Subheading';
  headers: string[] = [];
  config: Config | undefined;
  serviceError: any;
  configServiceCalled: boolean = false;

  constructor(
    private configService: ConfigService,
    private utils: UtilsService
  ) {
    if(this.debug) this.utils.log(`config.component.constructor: loading config data from service`);
    this.loadConfig();
  };

  clear() {
    this.config = undefined;
    this.serviceError = undefined;
    this.configServiceCalled = false;
    this.headers = [];
  }

  loadConfig() {
    if(this.debug) this.utils.log(`config.component.constructor: loadConfig()`);
    this.configServiceCalled = false;
    this.configService.getConfig();
      // .subscribe({
      //   next: (data: Config) => this.config = { ...data }, // success path
      //   error: error => this.serviceError = error // error path
      // });
    if(this.debug) this.utils.log(`config.component.constructor: loadConfig - config.menusUrl = ${this.config?.menusUrl}`);
    this.configServiceCalled = true;
  }

  getConfig() {
    if(this.debug) this.utils.log(`config.component.constructor: getConfig - config.menusUrl = ${this.config?.menusUrl}`);
    return this.config;
  }

  // getConfigResponse() {
  //   this.configServiceCalled = false;
  //   this.configService.getConfigResponse()
  //     // resp is of type `HttpResponse<Config[]>`
  //     .subscribe(resp => {
  //       // display its headers
  //       const keys = resp.headers.keys();
  //       this.headers = keys.map(key =>
  //         `${key}: ${resp.headers.get(key)}`);
  //       this.config = { ...resp.body! };
  //     });
  //   this.configServiceCalled = true;
  // }

  // makeConfigError() {
  //   this.configService.makeIntentionalError().subscribe({ error: error => this.serviceError = error.message });
  // }

  getType(val: any): string {
    return val instanceof Date ? 'date' : Array.isArray(val) ? 'array' : typeof val;
  }
  
}
