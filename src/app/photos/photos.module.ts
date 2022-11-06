import { NgModule } from '@angular/core';

import { SharedModule } from '../shared.module';
import { PhotosRoutingModule } from './photos-routing.module';

import { PhotoAddEditComponent } from './photo-add-edit/photo-add-edit.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { PhotosCarouselComponent } from './photos-carousel/photos-carousel.component';
import { PhotosGalleryComponent } from './photos-gallery/photos-gallery.component';

@NgModule({
  declarations: [
    PhotoAddEditComponent,
    PhotosListComponent,
    PhotosCarouselComponent,
    PhotosGalleryComponent
  ],
  imports: [
    PhotosRoutingModule,
    SharedModule
  ],
  exports: [
  ]
})
export class PhotosModule { }
