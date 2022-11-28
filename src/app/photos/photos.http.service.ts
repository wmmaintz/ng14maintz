import { Injectable } from '@angular/core';
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

@Injectable({
  providedIn: 'root'
})
export class PhotosHttpService {
  photos: Photo[] = [];
  
  constructor(
    public httpClient: HttpClient
  ){}

  getData(dataFile: string) {
    return this.httpClient.get<Photo>(dataFile)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }
  
  getDataResponse(dataFile: string): Observable<HttpResponse<Photo>> {
    return this.httpClient.get<Photo>(
      dataFile, { observe: 'response' });
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

}
