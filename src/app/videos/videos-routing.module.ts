import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VideoAddEditComponent } from './video-add-edit/video-add-edit.component';
import { VideosListComponent } from './videos-list/videos-list.component';
import { VideosCarouselComponent } from './videos-carousel/videos-carousel.component';
import { VideosGalleryComponent } from './videos-gallery/videos-gallery.component';

const routes: Routes = [
  { path: 'video-add-edit',   component: VideoAddEditComponent },
  { path: 'videos',           component: VideosListComponent },
  { path: 'videos-list',      component: VideosListComponent },
  { path: 'videos-carousel',  component: VideosCarouselComponent },
  { path: 'videos-gallery',   component: VideosGalleryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideosRoutingModule { }
