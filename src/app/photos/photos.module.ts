import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotoAddEditComponent } from './photo-add-edit/photo-add-edit.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { PhotosCarouselComponent } from './photos-carousel/photos-carousel.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PhotoAddEditComponent,
    PhotosListComponent,
    PhotosCarouselComponent
  ],
  imports: [
    CommonModule,
    PhotosRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class PhotosModule { }
