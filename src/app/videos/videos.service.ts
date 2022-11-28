import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from "@angular/common/http";
import { HttpResponse, HttpErrorResponse } from "@angular/common/http";

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import * as DATA from '@data/json/videos.json';
import { Video } from './video.model';

/* httpOptions
options: {
  headers?: HttpHeaders | {[header: string]: string | string[]},
  observe?: 'body' | 'events' | 'response',
  params?: HttpParams|{[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>},
  reportProgress?: boolean,
  responseType?: 'arraybuffer'|'blob'|'json'|'text',
  withCredentials?: boolean,
}
*/

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  videosUrl: string = '@data/json/videos.json';
  video: Video;
  videos$: Video[] = [];

  constructor(
    private http: HttpClient
  ) {
    this.videos$ = DATA;
    this.video = this.getVideo(11);
  }

  getVideos() {
    return this.http.get<Video[]>(this.videosUrl)
    .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  getVideosResponse(): Observable<HttpResponse<Video[]>> {
    return this.http.get<Video[]>(
      this.videosUrl, {observe: 'response'});
  }

  getVideo(id: number): Video {
    console.log(`VideosService.getVideo(id: ${id}) of ${this.videos$.length}`);
    for (let i = 0; i<this.videos$.length; i++) {
      console.log(`VideosService.getVideo - Comparing [${i}] with [${id}]`);
      if (this.videos$[i].id === id) {
        this.video = this.videos$[i];
        break;
      }
    }
    return this.video;
  }

  /* GET videos whose name contains search term */
  // searchVideos(term: string): Observable<Video[]> {
  //   term = term.trim();

  //   // Add safe, URL encoded search parameter if there is a search term
  //   const options = term ?
  //   { params: new HttpParams().set('name', term) } : {};

  //   return this.http.get<Video[]>(this.videosUrl, options)
  //     .pipe(
  //       catchError(this.handleError<Observable<Video[]>>('searchVideos', []))
  //     );
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
    return this.http.get('not/a/real/url')
      .pipe(
        catchError(this.handleError)
      );
  }

}
