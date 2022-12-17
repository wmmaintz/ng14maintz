import { Component, OnInit } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';

import { Observable, throwError } from 'rxjs';
import { pipe, filter } from 'rxjs';
import { map, catchError } from "rxjs/operators";

import { Video } from '../video.model';
import { VideosService } from '../videos.service';
import { LoadingService } from '@app/core/loading.service';
import { MessageService } from '@app/messages/message.service';
import { UtilsService } from '@app/core/utils.service';

@Component({
  selector: 'm-videos-carousel',
  templateUrl: './videos-carousel.component.html',
  styleUrls: [
    './videos-carousel.component.scss',
    '../videos.scss'
  ]  
})
export class VideosCarouselComponent implements OnInit {
  heading: string = 'Videos Carousel';
  subHeading: string = 'A carousel of interesting videos.';
  isLoading:boolean = true;
  videos: Video[] = [];
  serviceCalled:boolean = false;
  serviceError = undefined;

  constructor(
    private videosService: VideosService,
    private liveAnnouncer: LiveAnnouncer,
    private messageService: MessageService,
    private loadingService: LoadingService,
    private utils: UtilsService
  ) {}

  ngOnInit() {
    this.utils.log(`${new Date().toLocaleTimeString()} : videos-carousel.component.ngOnInit: calling videosService.getVideos`);
    this.videosService.getVideos()
      .subscribe(data => this.videos = data);
    this.isLoading = false;
    this.utils.log(`${new Date().toLocaleTimeString()} : videos-carousel.component.ngOnInit: back from calling videosService.getVideos`);
  }

  getPhotos(): void {
    this.videosService.getVideos()
      .subscribe({
        next: (data: Video[]) => this.videos = { ...data }, // success path
        error: error => this.serviceError = error // error path
      });
  }

}
