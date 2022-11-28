import { Injectable } from '@angular/core';
import { HttpClient,
         HttpResponse,
         HttpErrorResponse,
         HttpParams,
         HttpHeaders } from '@angular/common/http';
import { Observable, interval, throwError } from "rxjs";
import { catchError, retry, shareReplay, map } from 'rxjs/operators';

import { Config } from '@app/config/config.model';
import { ConfigService } from '@app/config/config.service';
import { Photo } from './photo.model';

// import { PhotosHttpService } from './photos.http.service';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  dataUrl: string = ''; //'assets/data/json/photos.json'; // loaded from ConfigService
  photos: Photo[] = [];
  config: Config;
  configError: string = '';

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService
    ) { 
    this.getConfig();
    while ( this.config.photosUrl == undefined ) {
      setTimeout(() => {
        console.log('waiting for config');
      }, 1000);
    } 
    console.log(`photos.service.constructor - config.photosUrl = ${this.config.photosUrl}`);
  }

  loadPhotos():Observable<Photo[]> {
    if( this.config.photosUrl ) {
      this.dataUrl = this.config.photosUrl;
      console.log(`dataUrl: ${this.dataUrl}`);
      return this.httpClient
        .get<Photo[]>(this.dataUrl)
        .pipe(catchError(this.handleError));
    } else {
      console.log('ERROR configuration not defined yet');
      return null;
    }
  }
      
  loadPhotos2(): void {
    let photoData:any[] = [];
    this.httpClient.get<Photo[]>(this.dataUrl).subscribe((res) => {
      this.photos = res
    }); 

    // let photoData:any[] = [];
    // this.httpClient.get<Photo[]>(this.dataUrl)
    // .pipe(
    //   retry(3), // retry a failed request up to 3 times
    //   catchError(this.handleError) // then handle the error
    // )
    // .subscribe((res) => {
    //   this.photos = res
    // }); 
    console.log(`${new Date().toLocaleTimeString()} : photos.service.loadPhotos: Loaded ${this.photos.length} photos`);
  }

  getPhotos() {
    return this.photos;
  }
  
  getDataResponse(): Observable<HttpResponse<Photo[]>> {
    return this.httpClient.get<Photo[]>(
      this.dataUrl, { observe: 'response' });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  makeIntentionalError() {
    return this.httpClient.get('not/a/real/url')
      .pipe(
        catchError(this.handleError)
      );
  }

  // savePhoto(photoId: number, changes: Partial<Photo>):Observable<any> {
  //   return this.httpClient.put("",)
  // }
  // getDataFromJSONFile() {
    // fs.exists(this.dataFile, (exist) => {
    //   if (exist) {

        // this.httpClient.get<Photo[]>(this.dataFile).subscribe((resp) => {this.photos = resp;});
        // return this.httpClient.get<Photo>(this.dataFile);
        // console.log(`Loaded ${JSON.stringify(this.photos)} photos`);

        //   } else {
    //     console.log(`ERROR: Data File, ${this.dataFile} doesn't exist!`);
    //   }
    // });
  // }

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

  getConfig() {
    this.configService.getConfig()
      .subscribe({
        next: (data: Config) => this.config = { ...data }, // success path
        error: error => this.configError = error // error path
      });
  }
}
