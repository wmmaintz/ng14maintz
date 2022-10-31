import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MaterialModule } from '../../material.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuTrigger } from '@angular/material/menu';
@Component({
  selector: 'm-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @ViewChild(MatMenuTrigger) triggerBtn: MatMenuTrigger ;

  showMenuText: Boolean = true;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() { }

  openMatMenuProgrammatically(){
    this.triggerBtn.openMenu();
  }

}
