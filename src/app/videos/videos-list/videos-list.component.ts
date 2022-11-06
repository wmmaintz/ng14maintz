import { Component, OnInit } from '@angular/core';

import { Video } from '../video.model';

@Component({
  selector: 'm-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: [
    './videos-list.component.scss',
    '../videos.scss'
  ]
})
export class VideosListComponent implements OnInit {
  heading: string = 'Videos List';
  subHeading: string = 'A collection of interesting videos.';
  isLoading:boolean = true;
  videos: Video[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
