import { Injectable } from '@angular/core';
import { HttpClient,
  HttpResponse,
  HttpErrorResponse,
  HttpParams,
  HttpHeaders } from '@angular/common/http';
import { Observable, interval, throwError } from "rxjs";
import { catchError, retry, shareReplay, map } from 'rxjs/operators';

import { Config } from '@app/config/config.model';
import { IConfig } from '@app/config/iConfig.interface';
import { ConfigService } from '@app/config/config.service';
import { MenuItem } from './menu.model';
import { IMenuItem } from './iMenu.interface';
import * as DATA from '@data/json/menu-items.json';
import { UtilsService } from '@app/core/utils.service';
import { data } from 'jquery';


@Injectable({
  providedIn: 'root'
})
export class MenuService {
  url: string = ''; //'assets/data/json/menu-items.json'; // loaded from ConfigService
  serviceError: string = '';
  menuItems: MenuItem[] = [];
  config: Config;
  configError: string = '';
  isLoading = true;

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService,
    private utils: UtilsService
  ) {
    this.utils.log(`menu.service.constructor - started`);
    this.getConfig();

    this.getMenuItems()
      .subscribe(data => this.menuItems = data);
    this.utils.log(`menu.service.constructor - menusUrl: [${this.url}]`);
    this.utils.log(`menu.service.constructor - after getMenuItems - ${this.menuItems.length} items.`);

    this.utils.log(`menu.service.constructor - ended`);
  }
    
  getConfig() {
    this.utils.log(`menu.service.getConfig - getConfig`);
    this.configService.getConfig();
      // .subscribe(data => this.config = data);
    if(this.config) this.url = this.config.menusUrl || undefined;
  }

  getMenuItems(): Observable<IMenuItem[]> {
    this.utils.log(`menu.service.getConfig - getMenuItems`);
    let data = this.httpClient.get<IMenuItem[]>(this.url);
    this.isLoading = false;
    return data;
  }

}
