import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Observable } from 'rxjs';
import { GalleryModule } from  'ng-gallery';

// Shared Modules, including Angular Material 
import { SharedModule } from './shared.module';

// Routing Modules
import { AppRoutingModule } from './app-routing.module';
import { AboutRoutingModule } from './about/about-routing.module';
import { AccountsRoutingModule } from './accounts/accounts-routing.module';
import { LinksRoutingModule } from './links/links-routing.module';
import { PhotosRoutingModule } from './photos/photos-routing.module';
import { VideosRoutingModule } from './videos/videos-routing.module';

// Local Components
import { AppComponent } from './app.component';
import { CalendarComponent } from './core/calendar/calendar.component';
import { CalendarThreeMonComponent } from './core/calendar-three-mon/calendar-three-mon.component';
import { CarouselComponent } from './core/carousel/carousel.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { DownloaderComponent } from './core/downloader/downloader.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './home/home/home.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';

import { NotFoundComponent } from '@app/core/not-found/not-found.component';
import { LoadingComponent } from '@app/core/loading/loading.component';
import { UnderConstructionComponent } from '@app/core/under-construction/under-construction.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    DashboardComponent,
    NavigationComponent,
    CalendarComponent,
    CalendarThreeMonComponent,
    CarouselComponent,
    SidebarComponent,
    NavbarComponent,
    DownloaderComponent,
    LoadingComponent,
    UnderConstructionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    SharedModule,
    AboutRoutingModule,
    AccountsRoutingModule,
    PhotosRoutingModule,
    VideosRoutingModule,
    LinksRoutingModule,
    // GalleryModule.withConfig({ ... }),
    GalleryModule,
    AppRoutingModule
  ],
  exports: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    DashboardComponent,
    NavigationComponent,
    CalendarComponent,
    CalendarThreeMonComponent,
    CarouselComponent,
    SidebarComponent,
    NavbarComponent,
    DownloaderComponent,
    LoadingComponent,
    UnderConstructionComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
