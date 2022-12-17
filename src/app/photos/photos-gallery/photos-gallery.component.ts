import { Component } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';

import { Observable, throwError } from 'rxjs';
import { pipe, filter } from 'rxjs';
import { map, catchError } from "rxjs/operators";

import { Photo }  from '../photo.model';
import { PhotosService } from '../photos.service';
import { LoadingService } from '@app/core/loading.service';
import { MessageService } from '@app/messages/message.service';
import { UtilsService } from '@app/core/utils.service';


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
  photo: Photo;
  serviceCalled:boolean = false;
  serviceError = undefined;

  constructor(
    private photosService: PhotosService,
    private liveAnnouncer: LiveAnnouncer,
    private messageService: MessageService,
    private loadingService: LoadingService,
    private utils: UtilsService
  ) {}

  ngOnInit() {
    this.utils.log(`${new Date().toLocaleTimeString()} : photos-gallery.component.ngOnInit: calling photosService.getPhotos`);
    this.photosService.getPhotos()
      .subscribe(data => this.photos = data);
    this.isLoading = false;
    this.utils.log(`${new Date().toLocaleTimeString()} : photos-gallery.component.ngOnInit: back from calling photosService.getPhotos`);
  }

  getPhotos(): void {
    this.photosService.getPhotos()
      .subscribe({
        next: (data: Photo[]) => this.photos = { ...data }, // success path
        error: error => this.serviceError = error // error path
      });
  }

}
