import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotoAddEditComponent } from './photo-add-edit/photo-add-edit.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { PhotosCarouselComponent } from './photos-carousel/photos-carousel.component';


@NgModule({
  declarations: [
    PhotoAddEditComponent,
    PhotosListComponent,
    PhotosCarouselComponent
  ],
  imports: [
    CommonModule,
    PhotosRoutingModule
  ]
})
export class PhotosModule { }
