import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Config } from './config.model';

@Injectable()
export class ConfigService {
  // TODO: Add logic to point to production or development version of this file
  env: string = '.production';
  dataUrl: string = '';
  
  constructor(
    private httpClient: HttpClient
  ) {
    this.env = '';
    this.dataUrl = `assets/data/json/config${this.env}.json`;
  }

  getConfig() { 
    return this.httpClient.get<Config>(this.dataUrl)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  getConfigResponse(): Observable<HttpResponse<Config>> {
    return this.httpClient.get<Config>(this.dataUrl, { observe: 'response' });
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

}
