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
import { Video } from './video.model';
import { IVideo } from './iVideo.interface';
import { UtilsService } from '@app/core/utils.service';


// httpOptions
// options: {
//   headers?: HttpHeaders | {[header: string]: string | string[]},
//   observe?: 'body' | 'events' | 'response',
//   params?: HttpParams|{[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>},
//   reportProgress?: boolean,
//   responseType?: 'arraybuffer'|'blob'|'json'|'text',
//   withCredentials?: boolean,
// }


@Injectable()
export class VideosService {
  url: string = 'assets/data/json/videos.json';
  video: Video;
  videos: Video[] = [];
  config: Config;
  configError: string = '';

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService,
    private utils: UtilsService
  ) {
    this.getVideos()
      .subscribe(data => this.videos = data);
  }

  getVideos(): Observable<IVideo[]> {
    return this.httpClient.get<IVideo[]>(this.url);
  }

  getVideo(id: number): IVideo {
    this.utils.log(`VideosService.getVideo(id: ${id}) of ${this.videos.length}`);
    for (let i = 0; i<this.videos.length; i++) {
      this.utils.log(`VideosService.getVideo - Comparing [${i}] with [${id}]`);
      if (this.videos[i].id === id) {
        this.video = this.videos[i];
        break;
      }
    }
    return this.video;
  }

  // getVideosResponse(): Observable<HttpResponse<Video[]>> {
  //   return this.http.get<Video[]>(
  //     this.videosUrl, {observe: 'response'});
  // }


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

  // makeIntentionalError() {
  //   return this.http.get('not/a/real/url')
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }

}
