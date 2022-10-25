import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from './photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotosHttpService {
  photos: any = [];

  constructor(public httpClient: HttpClient){}

  getPhotos(){
    this.httpClient.get('data/json/photos.json').subscribe((resp) => {
      this.photos = resp;
    });
  }
}
