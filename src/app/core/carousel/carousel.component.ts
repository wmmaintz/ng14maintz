import { Component, OnInit } from '@angular/core';
import { GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'm-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images: GalleryItem[];

  constructor() { }

ngOnInit() {
    // Set gallery items array
    this.images = [
      // new ImageItem({ src: 'IMAGE_SRC_URL', thumb: 'IMAGE_THUMBNAIL_URL' })
      new ImageItem({ src: '@assets/photos/wmm2.jpg', thumb: '@assets/photos/Thumbnails/TN-wmm2.jpg' }),
      new ImageItem({ src: '@assets/photos/ComputerGuy.jpg', thumb: '@assets/photos/Thumbnails/TN-ComputerGuy.jpg' }),
      new ImageItem({ src: '@assets/photos/Charlie.jpg', thumb: '@assets/photos/Thumbnails/TN-Charlie.jpg' }),
      // ... more items
    ];
  }

}
