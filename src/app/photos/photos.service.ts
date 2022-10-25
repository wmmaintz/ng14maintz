import { Injectable } from '@angular/core';
import * as Photos from '@data/json/photos.json';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  photos: any = (Photos as any).default;

  constructor() { }

}
