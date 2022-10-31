import { Component, OnInit } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIcon } from '@angular/material/icon';
import { MatMenuTrigger } from "@angular/material/menu";
@Component({
  selector: 'm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean = false;
  navbarMenu: boolean = true;
  sidebarMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
