import { Component, OnInit } from '@angular/core';

import { Photo }  from '../photo.model';
import { PhotosService } from '../photos.service';
@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss']
})
export class PhotosListComponent implements OnInit {
  isLoading:boolean = false;
  photos: Photo[] = [];
  
  constructor(private photosService: PhotosService) { 
  }

  ngOnInit(): void {
    this.photos = this.photosService.getPhotos();
  }

}
