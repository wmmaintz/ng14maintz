import { Injectable } from '@angular/core';
import { HttpClient,
         HttpResponse,
         HttpErrorResponse,
         HttpParams,
         HttpHeaders } from '@angular/common/http';
import { Observable, interval, throwError } from "rxjs";
import { catchError, retry, shareReplay, map } from 'rxjs/operators';

import { Config } from '@app/config/config.model';
import { IConfig } from '@app/config/iConfig.interface';
import { ConfigService } from '@app/config/config.service';
import { Photo } from './photo.model';
import { IPhoto } from './iPhoto.interface';
import { UtilsService } from '@app/core/utils.service';


// import { PhotosHttpService } from './photos.http.service';

@Injectable()
export class PhotosService {
  configUrl: string = 'assets/data/json/config.json';
  url: string = ''; //'assets/data/json/photos.json';
  photo: Photo;
  photos: Photo[] = [];
  config: Config;
  configError: string = '';

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService,
    private utils: UtilsService
  ) {
    this.getConfig();

    this.getPhotos()
      .subscribe(data => this.photos = data);
  }

  getConfig() {
    this.config = this.configService.getConfig();
      // .subscribe(data => this.config = data);
    this.url = this.config.photosUrl || undefined;
    this.utils.log(`photos.service.getConfig - dataUrl: ${this.url}`);
  }

  getPhotos(): Observable<IPhoto[]> {
    return this.httpClient.get<IPhoto[]>(this.url);
  }

  getPhoto(id: number): IPhoto {
    this.utils.log(`PhotosService.getPhoto(id: ${id}) of ${this.photos.length}`);
    for (let i = 0; i<this.photos.length; i++) {
      this.utils.log(`PhotosService.getPhoto - Comparing [${i}] with [${id}]`);
      if (this.photos[i].id === id) {
        this.photo = this.photos[i];
        break;
      }
    }
    return this.photo;
  }

  // loadPhotos():Observable<Photo[]> {
  //   if( this.config.photosUrl ) {
  //     this.dataUrl = this.config.photosUrl;
  //     this.utils.log(`dataUrl: ${this.dataUrl}`);
  //     return this.httpClient
  //       .get<Photo[]>(this.dataUrl)
  //       .pipe(catchError(this.handleError));
  //   } else {
  //     this.utils.log('ERROR configuration not defined yet');
  //     return null;
  //   }
  // }
      
  // loadPhotos2(): void {
  //   let photoData:any[] = [];
  //   this.httpClient.get<Photo[]>(this.dataUrl).subscribe((res) => {
  //     this.photos = res
  //   }); 

  //   // let photoData:any[] = [];
  //   // this.httpClient.get<Photo[]>(this.dataUrl)
  //   // .pipe(
  //   //   retry(3), // retry a failed request up to 3 times
  //   //   catchError(this.handleError) // then handle the error
  //   // )
  //   // .subscribe((res) => {
  //   //   this.photos = res
  //   // }); 
  //   this.utils.log(`${new Date().toLocaleTimeString()} : photos.service.loadPhotos: Loaded ${this.photos.length} photos`);
  // }

  // getPhotos() {
  //   return this.photos;
  // }
  
  // getDataResponse(): Observable<HttpResponse<Photo[]>> {
  //   return this.httpClient.get<Photo[]>(
  //     this.dataUrl, { observe: 'response' });
  // }

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
        // this.utils.log(`Loaded ${JSON.stringify(this.photos)} photos`);

        //   } else {
    //     this.utils.log(`ERROR: Data File, ${this.dataFile} doesn't exist!`);
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
  

}
