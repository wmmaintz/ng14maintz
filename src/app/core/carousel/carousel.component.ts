import { Component, OnInit } from '@angular/core';
import { GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'm-carousel',
  template: '<gallery [items]="images"></gallery>',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images: GalleryItem[];

  constructor() { }

ngOnInit() {
    // Set gallery items array
    this.images = [
      new ImageItem({ src: 'IMAGE_SRC_URL', thumb: 'IMAGE_THUMBNAIL_URL' })
      ,
      // ... more items
    ];
  }

}
