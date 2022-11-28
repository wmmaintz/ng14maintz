import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SharedModule } from '../shared.module';
import { VideosRoutingModule } from './videos-routing.module';
import { VideosService } from './videos.service';
import { VideoAddEditComponent } from './video-add-edit/video-add-edit.component';
import { VideosListComponent } from './videos-list/videos-list.component';
import { VideosCarouselComponent } from './videos-carousel/videos-carousel.component';
import { VideosGalleryComponent } from './videos-gallery/videos-gallery.component';


@NgModule({
  declarations: [
    VideoAddEditComponent,
    VideosListComponent,
    VideosCarouselComponent,
    VideosGalleryComponent
  ],
  imports: [
    SharedModule,
    VideosRoutingModule
  ],
  exports: [
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    VideosService
  ]
})
export class VideosModule { }
