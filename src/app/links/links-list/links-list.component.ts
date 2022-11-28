import { Component, OnInit } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatGridTileHeaderCssMatStyler } from '@angular/material/grid-list';
import { MatTabGroup, MatTab, MatTabLabel } from '@angular/material/tabs';

import { Observable, throwError } from 'rxjs';
import { pipe, filter } from 'rxjs';
import { map, catchError } from "rxjs/operators";

import { Link } from '../link.model';
import { LinksService } from '../links.service';
import { LoadingService } from '@app/core/loading.service';
import { MessageService } from '@app/messages/message.service';
import * as DATA from '@data/json/links.json';

@Component({
  selector: 'm-links-list',
  templateUrl: './links-list.component.html',
  styleUrls: [
    '../links.scss',
    './links-list.component.scss'
  ],
  providers: [LinksService]
})
export class LinksListComponent implements OnInit {
  heading: string = 'Links List';
  subHeading: string = 'A list of hyperlinks to other Maintz\'s.';
  isLoading:boolean = true;
  links: any[] = [];

  constructor(
    private liveAnnouncer: LiveAnnouncer,
    private linksService: LinksService,
    private messageService: MessageService,
    private loadingService: LoadingService
  ) { }

  ngOnInit(): void {
    this.links = DATA;
  }

}
