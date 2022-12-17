import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { IConfig } from './iConfig.interface';
import { Config } from './config.model';
import { HttpErrorHandler, HandleError } from '@app/http-error-handler.service';
import { UtilsService } from '@app/core/utils.service';

import * as DATA from '@data/json/config.json';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable()
export class ConfigService implements OnInit {
  configUrl: string = '';
  // TODO: Add logic to point to production or development version of this file
  env: string = '.production';  // TODO: Set this to a null string for development.
  debug: boolean = true;
  config: Config;
  
  constructor(
    private httpClient: HttpClient,
    httpErrorHandler: HttpErrorHandler,
    private utils: UtilsService
  ) {
    // TODO: Add logic to point to production or development version of this file
    this.env = '';
    this.configUrl = `assets/data/json/config${this.env}.json`;
    this.getConfig();
      // .subscribe(data => this.config = data);

    // this.getConfig()
    //   .subscribe(
    //     data => this.config = data,
    //     error => console.log(error),
    //     () => this.utils.log(`config.service.getConfig Completed`)
    //   );
    // Temporary solution
    if(this.debug && this.config) { this.dumpConfig(); } else {this.config = DATA;}
    if(this.config?.menusUrl !== undefined) {
      if(this.debug && this.config) this.utils.log(`config.service.constructor: configuration is loaded`);
    }
  }

  ngOnInit(): void {
    this.utils.log(`config.service.getConfig: loading configuration`);
    this.config = DATA;
    this.dumpConfig();
  }
  
  getConfig() {
    return this.config;
    // return this.httpClient.get<IConfig>(this.configUrl);
  }

  // getConfigResponse(): Observable<HttpResponse<Config>> {
  //   return this.httpClient.get<Config>(this.configUrl, { observe: 'response' });
  // }

  dumpConfig() {
    if ( this.config?.menusUrl === 'undefined' ) {
      if(this.debug) this.utils.log(`config.service.dumpConfig - configuration not yet defined`);
    } else {
      if(this.debug) {
        this.utils.log(`config.service.dumpConfig - menusUrl  = [${this.config.menusUrl }]`); 
        this.utils.log(`config.service.dumpConfig - linksUrl  = [${this.config.linksUrl }]`); 
        this.utils.log(`config.service.dumpConfig - photosUrl = [${this.config.photosUrl}]`); 
        this.utils.log(`config.service.dumpConfig - statesUrl = [${this.config.statesUrl}]`); 
        this.utils.log(`config.service.dumpConfig - usersUrl  = [${this.config.usersUrl }]`); 
        this.utils.log(`config.service.dumpConfig - videosUrl = [${this.config.videosUrl}]`); 
        this.utils.log(`config.service.dumpConfig - logfile   = [${this.config.logfile  }]`); 
        this.utils.log(`config.service.dumpConfig - date      = [${this.config.date     }]`); 
      }
    }
  }
}
