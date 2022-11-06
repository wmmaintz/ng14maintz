import { Component, OnInit } from '@angular/core';

import { Video } from '../video.model';

@Component({
  selector: 'app-videos-gallery',
  templateUrl: './videos-gallery.component.html',
  styleUrls: [
    './videos-gallery.component.scss',
    '../videos.scss'
  ]
})
export class VideosGalleryComponent implements OnInit {
  heading: string = 'Videos Gallery';
  subHeading: string = 'A collection of interesting videos.';
  isLoading:boolean = true;
  videos: Video[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
