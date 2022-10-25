import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhotoAddEditComponent }  from './photo-add-edit/photo-add-edit.component';
import { PhotosListComponent }     from './photos-list/photos-list.component';
import { PhotosCarouselComponent } from './photos-carousel/photos-carousel.component';

const routes: Routes = [
  { path: 'photo-add-edit', component: PhotoAddEditComponent },
  { path: 'photos-list',     component: PhotosListComponent },
  { path: 'photos-carousel', component: PhotosCarouselComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule { }
