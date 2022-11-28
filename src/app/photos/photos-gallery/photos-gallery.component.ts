import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Photo }  from '../photo.model';
import { PhotosService } from '../photos.service';

// import { ImageGridComponent } from '@angular/material/grid-list';

@Component({
  selector: 'm-photos-gallery',
  templateUrl: './photos-gallery.component.html',
  styleUrls: [
    './photos-gallery.component.scss',
    '../photos.scss'  
  ]
})
export class PhotosGalleryComponent {
  heading: string = 'Photos Gallery';
  subHeading: string = 'A grid of memories from the past.';
  isLoading:boolean = true;
  photos: Photo[] = [];
  serviceCalled:boolean = false;
  serviceError = undefined;

  constructor(
    private photoService: PhotosService
  ) { 
      console.log(`${new Date().toLocaleTimeString()} : photos-gallery.component.constructor: calling loadPhotos`);
      this.loadPhotos();
      console.log(`${new Date().toLocaleTimeString()} : photos-gallery.component.constructor: back from calling loadPhotos`);
  }

  loadPhotos(): void {
    this.photoService.loadPhotos()
      .subscribe({
        next: (data: Photo[]) => this.photos = { ...data }, // success path
        error: error => this.serviceError = error // error path
      });
  }

}
