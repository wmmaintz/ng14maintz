import { Component, OnInit } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';

import { Observable, throwError } from 'rxjs';
import { pipe, filter } from 'rxjs';
import { map, catchError } from "rxjs/operators";

import { Photo }  from '../photo.model';
import { PhotosService } from '../photos.service';
import { LoadingService } from '@app/core/loading.service';
import { MessageService } from '@app/messages/message.service';
import { UtilsService } from '@app/core/utils.service';

import { UnderConstructionComponent } from '@app/core/under-construction/under-construction.component';

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
  photo: Photo;
  photos: Photo[] = [];
  serviceError: any;
  serviceCalled: boolean = false;

  constructor(
    private photosService: PhotosService,
    private liveAnnouncer: LiveAnnouncer,
    private messageService: MessageService,
    private loadingService: LoadingService,
    private utils: UtilsService
  ) {}

  ngOnInit(): void {
    this.photosService.getPhotos()
      .subscribe(data => this.photos = data);
    this.isLoading = false;
  }

  getPhotos() {
    this.utils.log(`Calling the photosService.getPhotos method ...`);
    this.isLoading = true;
    this.photosService.getPhotos()
      .subscribe({
        next: (data: Photo[]) => this.photos = { ...data }, // success path
        error: error => this.serviceError = error // error path
      });
      this.isLoading = false;
      this.utils.log(`Returned from the photosService.getPhotos method call - [${this.photos.length}] photos`);
    this.serviceCalled = true;
  }
}
