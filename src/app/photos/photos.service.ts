import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Photo } from './photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  photos: Photo[] = [];
  dataFile: string = '@data/json/photos.json';

  constructor(public httpClient: HttpClient) {
    this.getDataFromJSONFile();
  }

  getDataFromJSONFile() {
    // fs.exists(this.dataFile, (exist) => {
    //   if (exist) {

        this.httpClient.get<Photo[]>(this.dataFile).subscribe((resp) => {this.photos = resp;});
        console.log(`Loaded ${JSON.stringify(this.photos)} photos`);

        //   } else {
    //     console.log(`ERROR: Data File, ${this.dataFile} doesn't exist!`);
    //   }
    // });
  }

  getPhotos() {
    return this.photos;
  }
  
}
