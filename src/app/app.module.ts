import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { HomeComponent } from './home/home/home.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';

import { NotFoundComponent } from './core/not-found/not-found.component';
import { UnderConstructionComponent } from './core/under-construction/under-construction.component';
import { LoadingComponent } from './core/loading/loading.component';
import { CalendarComponent } from './core/calendar/calendar.component';
import { CalendarThreeMonComponent } from './core/calendar-three-mon/calendar-three-mon.component';
import { CarouselComponent } from './core/carousel/carousel.component';

// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatButtonModule } from '@angular/material/button';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatIconModule } from '@angular/material/icon';
// import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    UnderConstructionComponent,
    DashboardComponent,
    NavigationComponent,
    CalendarComponent,
    LoadingComponent,
    CalendarThreeMonComponent,
    CarouselComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    SharedModule,
    AboutRoutingModule,
    AccountsRoutingModule,
    PhotosRoutingModule,
    VideosRoutingModule,
    LinksRoutingModule,
    AppRoutingModule,
    // MatToolbarModule,
    // MatButtonModule,
    // MatSidenavModule,
    // MatIconModule,
    // MatListModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
