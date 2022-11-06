import { Component, OnInit } from '@angular/core';
// import { ImageGridComponent }

@Component({
  selector: 'm-photos-gallery',
  templateUrl: './photos-gallery.component.html',
  styleUrls: [
    './photos-gallery.component.scss',
    '../photos.scss'  
  ]
})
export class PhotosGalleryComponent implements OnInit {
  heading: string = 'Photos Gallery';
  subHeading: string = 'A grid of memories from the past.';
  isLoading:boolean = true;
  photos: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
