import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { PhotosGalleryComponent } from '../photos/photos-gallery/photos-gallery.component';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  isLoading: boolean = false;
  percentLoaded: number = 0;

  constructor() { }

  showLoaderUntilCompleted() {
    this.isLoading = true;
    this.percentLoaded = 0;
    while(this.isLoading){
      // Load the data
      this.getPercentLoaded()
    }
    this.isLoading = false;
    this.percentLoaded = 100;
  }

  getPercentLoaded
}
