import { Injectable, OnInit } from '@angular/core';
import { HttpClient,
         HttpParams,
         HttpResponse,
         HttpErrorResponse,
         HttpHeaders } from '@angular/common/http';
import { Observable,
         throwError } from 'rxjs';
import { shareReplay,
         catchError,
         retry,
         map } from 'rxjs/operators';

import { Photo } from './photo.model';
import { JsonPipe } from '@angular/common';
import * as PHOTOS from '@data/json/photos.json';

@Injectable({
  providedIn: 'root'
})
export class PhotosService implements OnInit {
  photos = PHOTOS;
  // photos$: Observable<Photo[]> = [];
  dataFile: string = '@data/json/photos.json';

  constructor(public httpClient: HttpClient) {}

  ngOnInit(): void {
    // this.loadPhotos();
    // if (this.photos.length > 0) {}
    
    console.log(`photos.service ngOnInit: Loaded ${this.photos.length} photos`);
    console.log(`photos.service ngOnInit: Loaded ${JSON.stringify(this.photos)} photos`);
  }
  
  getPhotos(): Photo[] {
    if(this.photos.length == 0){
      this.loadPhotos();
    }
    return this.photos;
  }

  loadPhotos() {
    return this.photos;
    // return this.httpClient.get<Photo>(this.dataFile)
    //   .pipe(
    //     map( resp => this.photos = resp ),
    //     retry(3), // retry a failed request 3 times
    //     catchError(this.handleError) // then handle the error
    //   );
  }

  // savePhoto(photoId: number, changes: Partial<Photo>):Observable<any> {
  //   return this.httpClient.put("",)
  // }
  getDataFromJSONFile() {
    // fs.exists(this.dataFile, (exist) => {
    //   if (exist) {

        // this.httpClient.get<Photo[]>(this.dataFile).subscribe((resp) => {this.photos = resp;});
        return this.httpClient.get<Photo>(this.dataFile);
        console.log(`Loaded ${JSON.stringify(this.photos)} photos`);

        //   } else {
    //     console.log(`ERROR: Data File, ${this.dataFile} doesn't exist!`);
    //   }
    // });
  }

  // getPhotoResponse(): Observable<HttpResponse<Photo>> {
  //   return this.httpClient.get<Photo>(
  //     this.dataFile, { observe: 'response' });
  // }

  // private handleError(error: HttpErrorResponse) {
  //   if (error.status === 0) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong.
  //     console.error(
  //       `Backend returned code ${error.status}, body was: `, error.error);
  //   }
  //   // Return an observable with a user-facing error message.
  //   return throwError(() => new Error('Something bad happened; please try again later.'));
  // }

}
