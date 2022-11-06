import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, catchError } from "rxjs";
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private httpClient: HttpClient) { }

  // public fileExists(url: string): Observable<boolean> {
    // return this.httpClient.get(url).pipe(map(() => true), catchError(() => of(false)));
  // }

  getFileDate(fullfilename): Date {
    let fileDate = new Date();
    return fileDate;
  }
}
