import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideosRoutingModule } from './videos-routing.module';
import { VideoAddEditComponent } from './video-add-edit/video-add-edit.component';
import { VideosListComponent } from './videos-list/videos-list.component';
import { VideosCarouselComponent } from './videos-carousel/videos-carousel.component';


@NgModule({
  declarations: [
    VideoAddEditComponent,
    VideosListComponent,
    VideosCarouselComponent
  ],
  imports: [
    CommonModule,
    VideosRoutingModule
  ]
})
export class VideosModule { }
