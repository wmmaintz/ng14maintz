import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatMenuItem, MatMenuTrigger, MAT_MENU_PANEL } from '@angular/material/menu';
import { Overlay, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { Directionality } from '@angular/cdk/bidi';
import { FocusMonitor } from '@angular/cdk/a11y';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { event } from 'jquery';

import { SharedModule } from '../../shared.module';
import { User } from '../../accounts/user.model';

@Component({
  selector: 'm-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @ViewChild(MatMenuTrigger) triggerBtn: MatMenuTrigger ;
  isLoggedIn = true;
  showMenuText: boolean = true;
  user: User = new User();
  isMenuOpened: boolean = false;
  isDropDownOpen: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.user.role = "admin";  // user or admin
  }

  toggleMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
  }

  clickedOutside(): void {
    this.isMenuOpened = false;
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  onToggleSidenav(): void {
    this.triggerBtn.openMenu();
  }

  openDropDown(){

  }

  closeDropDown(){

  }

}
