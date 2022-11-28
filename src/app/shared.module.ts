import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';

import { MaterialModule } from './material.module';

import { AnimatedButtonComponent } from '@app/core/animated-button/animated-button.component';
import { AnimatedDeleteButtonComponent } from '@app/core/animated-delete-button/animated-delete-button.component';
import { AnimatedDownloadButtonComponent } from '@app/core/animated-download-button/animated-download-button.component';
import { AnimatedIconButtonComponent }  from '@app/core/animated-icon-button/animated-icon-button.component';
import { AnimatedMoreButtonComponent } from '@app/core/animated-more-button/animated-more-button.component';
import { AnimatedSubmitButtonComponent } from '@app/core/animated-submit-button/animated-submit-button.component';
import { CalendarComponent } from '@app/core/calendar/calendar.component';
import { CalendarThreeMonComponent } from '@app/core/calendar-three-mon/calendar-three-mon.component';
import { CarouselComponent } from '@app/core/carousel/carousel.component';
import { DownloaderComponent } from '@app/core/downloader/downloader.component';
import { LoadingComponent } from '@app/core/loading/loading.component';
import { NotFoundComponent } from '@app/core/not-found/not-found.component';
import { SidebarComponent } from '@app/core/sidebar/sidebar.component';
import { SubFooterComponent } from '@app/core/sub-footer/sub-footer.component';
import { UnderConstructionComponent } from '@app/core/under-construction/under-construction.component';

@NgModule({
  declarations: [
    AnimatedButtonComponent,
    AnimatedDeleteButtonComponent,
    AnimatedDownloadButtonComponent,
    AnimatedIconButtonComponent,
    AnimatedMoreButtonComponent,
    AnimatedSubmitButtonComponent,
    CalendarComponent,
    CalendarThreeMonComponent,
    CarouselComponent,
    DownloaderComponent,
    LoadingComponent,
    NotFoundComponent,
    SidebarComponent,
    SubFooterComponent,
    UnderConstructionComponent,
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
    AnimatedButtonComponent,
    AnimatedDeleteButtonComponent,
    AnimatedDownloadButtonComponent,
    AnimatedIconButtonComponent,
    AnimatedMoreButtonComponent,
    AnimatedSubmitButtonComponent,
    CalendarComponent,
    CalendarThreeMonComponent,
    CarouselComponent,
    DownloaderComponent,
    LoadingComponent,
    NotFoundComponent,
    SidebarComponent,
    SubFooterComponent,
    UnderConstructionComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }
