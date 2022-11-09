import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { CalendarComponent } from '@app/core/calendar/calendar.component';
import { CalendarThreeMonComponent } from '@app/core/calendar-three-mon/calendar-three-mon.component';
import { CarouselComponent } from '@app/core/carousel/carousel.component';
import { DownloaderComponent } from '@app/core/downloader/downloader.component';
import { LoadingComponent } from '@app/core/loading/loading.component';
import { NotFoundComponent } from '@app/core/not-found/not-found.component';
import { SidebarComponent } from '@app/core/sidebar/sidebar.component';
import { UnderConstructionComponent } from '@app/core/under-construction/under-construction.component';
import { SubFooterComponent } from '@app/core/sub-footer/sub-footer.component';


@NgModule({
  declarations: [
    CalendarComponent,
    CalendarThreeMonComponent,
    CarouselComponent,
    DownloaderComponent,
    LoadingComponent,
    NotFoundComponent,
    SidebarComponent,
    UnderConstructionComponent,
    SubFooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FormsModule, 
    ReactiveFormsModule,
    SubFooterComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }
