import { Component, OnInit } from '@angular/core';

import { Video } from '../video.model';

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

  constructor() { }

  ngOnInit(): void {
  }

}
