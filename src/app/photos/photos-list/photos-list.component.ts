import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatGridTileHeaderCssMatStyler } from '@angular/material/grid-list';
import { MatTabGroup, MatTab, MatTabLabel } from '@angular/material/tabs';

import { Observable, throwError } from 'rxjs';
import { pipe, filter } from 'rxjs';
import { map, catchError } from "rxjs/operators";

import { Photo }  from '../photo.model';
import { PhotosService } from '../photos.service';
import { LoadingService } from '@app/core/loading.service';
import { MessageService } from '@app/messages/message.service';
import * as DATA from '@data/json/photos.json';

import { UnderConstructionComponent } from '@app/core/under-construction/under-construction.component';
import { triggerAsyncId } from 'async_hooks';

@Component({
  selector: 'm-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: [
    '../photos.scss',
    './photos-list.component.scss'
  ],
  providers: [PhotosService]
})
export class PhotosListComponent implements AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;
  heading: string = 'Photos List';
  subHeading: string = 'A collection of memories of the past.';
  isLoading:boolean = true;
  error: any;
  headers: string[] = [];
  serviceCalled: boolean = false;
  photo: Photo;
  photos: Photo[] = [];
  sortedData: Photo[] = [];
  numCols: number = 0;
  numRows:number = 0;

  // Available Columns To Display: 'id', 'name', 'href', 'thumbnail', 'hoffset','voffset', 'dateTaken', 'size', 'tags', 'hilight'
  displayedColumns: string[] = [ 'id', 'name', 'dateTaken', 'size', 'tags' ];
  dataSource = new MatTableDataSource(this.photos);
  
  constructor(
    private photosService: PhotosService,
    private liveAnnouncer: LiveAnnouncer,
    private messageService: MessageService,
    private loadingService: LoadingService
  ) {
    this.getPhotos();
    console.log(`After getData: ${this.photos.length} photos loaded.`);
    this.getDataResponse();
    console.log(`After getDataResponse: ${this.photos.length} photos loaded.`);
    this.sortedData = this.photos.slice();
  }

  clear() {
    this.photos = undefined;
    this.error = undefined;
    this.headers = [];
    this.serviceCalled = false;
  }

  getPhotos() {
    console.log(`Calling the photosService.getPhotos method ...`);
    this.isLoading = true;
    this.photosService.getPhotos();
      // .subscribe({
      //   next: (data: Photo[]) => this.photos = { ...data }, // success path
      //   error: error => this.error = error // error path
      // });
      this.isLoading = false;
      console.log(`Returned from the photosService.getPhotos method call - [${this.photos.length}] photos`);
    this.serviceCalled = true;
  }

  getDataResponse() {
    this.photosService.getDataResponse()
      // resp is of type `HttpResponse<Config>`
      .subscribe(resp => {
        // display its headers
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);

        // access the body directly, which is typed as `Config`.
        this.photos = { ...resp.body! };
      });
      console.log(`Returned from the photosService.getDataResponse method call - [${this.photos.length}] photos`);
    }

  makeError() {
    this.photosService.makeIntentionalError().subscribe({ error: error => this.error = error.message });
  }

  sortPhotos(sort: Sort) {
    const data = this.photos.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      // 'id', 'name', 'dateTaken', 'size', 'tags'
      switch (sort.active) {
        case 'id':
          return this.compare(a.id, b.id, isAsc);
        case 'name':
          return this.compare(a.name, b.name, isAsc);
        case 'dateTaken':
          return this.compare(a.dateTaken, b.dateTaken, isAsc);
        case 'size':
          return this.compare(a.size, b.size, isAsc);
        case 'tags':
          let i = 0;
          let combinedTagsA = '';
          // first sort the tags for each piece of data
          if (a.tags.length > 1) {
            for(i=0; i<a.tags.length - 1; i++) {
              if (a.tags[i] >= a.tags[i+1]) {
                let tmp = a.tags[i];
                a.tags[i] = a.tags[i+1];
                a.tags[i+1] = tmp;
              }
              combinedTagsA += a.tags[i] + '|';
            }
            combinedTagsA += a.tags[i+1];
          } else {
            combinedTagsA = a.tags[0];
          }
          let combinedTagsB = '';
          if (b.tags.length > 1) {
            for(i=0; i<b.tags.length - 1; i++) {
              if (b.tags[i] >= b.tags[i+1]) {
                let tmp = b.tags[i];
                b.tags[i] = b.tags[i+1];
                b.tags[i+1] = tmp;
              }
              combinedTagsB += b.tags[i] + '|';
            }
            combinedTagsB += b.tags[i+1];
          } else {
            combinedTagsB = b.tags[0];
          }
          return this.compare(combinedTagsA, combinedTagsB, isAsc);
        default:
          return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  ngAfterViewInit(): void {
    // this.photos = this.photosService.getData();
    this.getPhotos();
    this.numRows=this.photos.length;
    this.numCols=10;
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // You can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this.liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this.liveAnnouncer.announce('Sorting cleared');
    }
  }

  // getPhotos() {
  //   this.isLoading = true;
  //   this.photos = this.photosService.getData();
  //   this.isLoading = false;
      // .pipe(
      //   map(photos => photos = photos),
      //   catchError(err => {
      //     const message = "Could not load photos";
      //     this.messageService.showError(message);
      //     console.log(message, err);
      //     return throwError(err);
      //   })
      // )
      ;

    // const loadPhotos$ = this.loadingService.showLoaderUntilCompleted(Photos$);
    // this.photos$ = loadPhotos$
    // console.log(`records load = [${data}]`);
    // this.photos = data;
    // this.dataSource=data;
    // return this.photos;
  // }

}
