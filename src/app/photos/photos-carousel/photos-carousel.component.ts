import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'm-photos-carousel',
  templateUrl: './photos-carousel.component.html',
  styleUrls: [
    './photos-carousel.component.scss',
    '../photos.scss'  
  ]
})
export class PhotosCarouselComponent implements OnInit {
  heading: string = 'Photos Carousel';
  subHeading: string = 'A carousel of memories from the past.';
  isLoading:boolean = true;
  photos: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
