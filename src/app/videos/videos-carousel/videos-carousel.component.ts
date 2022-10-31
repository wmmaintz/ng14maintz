import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'm-videos-carousel',
  templateUrl: './videos-carousel.component.html',
  styleUrls: [
    './videos-carousel.component.scss',
    '../videos.scss'
  ]  
})
export class VideosCarouselComponent implements OnInit {
  isLoading:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
