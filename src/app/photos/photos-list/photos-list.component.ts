import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { MatGridTileHeaderCssMatStyler } from '@angular/material/grid-list';
import { MatTabGroup, MatTab, MatTabLabel } from '@angular/material/tabs';
import { Observable, throwError } from 'rxjs';
import { pipe, filter } from 'rxjs';
import { map, catchError } from "rxjs/operators";

import { PhotosModule } from '../photos.module';
import { Photo }  from '../photo.model';
import { PhotosService } from '../photos.service';
import { LoadingService } from '../../core/loading.service';
import { MessageService } from '@app/message.service';

import { UnderConstructionComponent } from '@app/core/under-construction/under-construction.component';

@Component({
  selector: 'm-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: [
    './photos-list.component.scss',
    '../photos.scss'  
  ],
  providers: [PhotosService]
})
export class PhotosListComponent implements AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;
  heading: string = 'Photos List';
  subHeading: string = 'A collection of memories of the past.';
  isLoading:boolean = true;
  // photos$: Observable<Photo[]>
  photos: any[] = [];
  numCols: number = 0;
  numRows:number = 0;

  // Available Columns To Display: 'id', 'name', 'href', 'thumbnail', 'hoffset','voffset', 'dateTaken', 'size', 'tags', 'hilight'
  displayedColumns: string[] = [ 'id', 'name', 'dateTaken', 'size', 'tags' ];
  dataSource = new MatTableDataSource(this.photos);
  
  constructor(
    private liveAnnouncer: LiveAnnouncer,
    private photosService: PhotosService,
    private messageService: MessageService,
    private loadingService: LoadingService
  ) {}

  ngAfterViewInit(): void {
    this.photos = this.photosService.getPhotos();
    this.isLoading = false;
    //this.numRows=this.photos.length;
    //this.numCols=10;
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

  reloadPhotos() {
    const data = this.photosService.loadPhotos()
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
    this.photos = data;
    // this.dataSource=data;
    return this.photos;
  }

}
