import { Component, OnInit } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatGridTileHeaderCssMatStyler } from '@angular/material/grid-list';
import { MatTabGroup, MatTab, MatTabLabel } from '@angular/material/tabs';

import { Observable, throwError } from 'rxjs';
import { pipe, filter } from 'rxjs';
import { map, catchError } from "rxjs/operators";

import { Video } from '../video.model';
import { VideosService } from '../videos.service';
import { LoadingService } from '@app/core/loading.service';
import { MessageService } from '@app/messages/message.service';
import * as DATA from '@data/json/videos.json';

@Component({
  selector: 'm-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: [
    './videos-list.component.scss',
    '../videos.scss'
  ],
  providers: [VideosService]
})
export class VideosListComponent implements OnInit {
  heading: string = 'Videos List';
  subHeading: string = 'A collection of interesting videos.';
  isLoading:boolean = true;
  videos: Video[] = [];
  
  constructor(
    private liveAnnouncer: LiveAnnouncer,
    private videosService: VideosService,
    private messageService: MessageService,
    private loadingService: LoadingService
  ) { }

  ngOnInit(): void {
    this.videos = DATA;
  }

}
