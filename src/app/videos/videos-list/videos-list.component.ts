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
import { UtilsService } from '@app/core/utils.service';

@Component({
  selector: 'm-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: [
    '../videos.scss',
    './videos-list.component.scss'
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
    private loadingService: LoadingService,
    private utils: UtilsService
  ) { }

  ngOnInit(): void {
    this.videosService.getVideos()
      .subscribe(data => this.videos = data);
    this.isLoading = false;
  }

}
