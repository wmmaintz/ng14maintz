import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, catchError, of } from "rxjs";
import { map } from "rxjs/operators";
import * as fs from 'fs';
import * as path from 'path';
import { promises as fsPromises } from 'fs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  url: string = './';
  constructor(
    private httpClient: HttpClient
  ) { 
    console.log(`url[${this.url}] exists=[${this.fileExists(this.url)}]`)
  }

  public fileExists(url: string): Observable<boolean> {
    return this.httpClient.get(url).pipe(map(() => true), catchError(() => of(false)));
  }

  getFileDate(fullfilename): Date {
    let fileDate = new Date();
    return fileDate;
  }

  
}
