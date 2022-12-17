import { Component, ViewChild, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatMenuItem, MatMenuTrigger, MAT_MENU_PANEL } from '@angular/material/menu';
import { Overlay, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { Directionality } from '@angular/cdk/bidi';
import { FocusMonitor } from '@angular/cdk/a11y';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { event } from 'jquery';

import { SharedModule } from '@app/shared.module';
import { UtilsService } from '@app/core/utils.service';
import { AccountsService } from '@app/accounts/accounts.service';
import { User } from '@app/accounts/user.model';
import { MenuItem } from './menu.model';
import { MenuService } from './menu.service';

import * as DATA from '@data/json/menu-items.json';

@Component({
  selector: 'm-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [
    MenuService
  ]
})
export class NavbarComponent implements OnInit {
  @ViewChild(MatMenuTrigger) triggerBtn: MatMenuTrigger ;
  debug: boolean = true;
  isLoggedIn = true;
  showMenuText: boolean = true;
  user: User = new User();
  isMenuOpened: boolean = false;
  isDropDownOpen: boolean = false;
  menuItems: MenuItem[];
  // serviceError: string = null;
  oldMenu:boolean = true;
  showTable:boolean = false;
  isLoading: boolean = false;
  serviceError:string = '';

  constructor(
    private menuService: MenuService,
    private accountsService: AccountsService,
    private utils: UtilsService
  ) {
    this.user.role = "admin";  // user or admin - for development, set to admin
    // this.showTable = true;
    this.oldMenu = false;
  }

  ngOnInit(): void {
    this.menuService.getMenuItems()
    // .subscribe(data => this.menuItems = data);
    .subscribe({
      next: (data: any) => this.menuItems = { ...data }, // success path
      error: error => this.serviceError = error // error path
    });
  
    this.isLoading = false;
  }

  // loadMenuItems(): void {
  //   this.menuService.getMenuItems()
  //   .subscribe({
  //     next: (data: any) => this.menuItems$ = { ...data }, // success path
  //     error: error => this.serviceError = error // error path
  //   });
  // }

  toggleMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
  }

  clickedOutside(): void {
    this.isMenuOpened = false;
  }

  onToggleSidenav(): void {
    this.triggerBtn.openMenu();
  }

  openDropDown(){

  }

  closeDropDown(){

  }

}
