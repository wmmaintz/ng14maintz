import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GalleryModule } from  'ng-gallery';
import * as $ from "jquery";

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
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { NavbarComponent } from './core/navbar/navbar.component';
// import { NavbarOldComponent } from './core/navbarOld/navbar.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { HomeComponent } from './home/home/home.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { ConfigComponent } from './config/config.component';
import { MessagesComponent } from './messages/messages.component';
import { InfLoadingComponent } from './core/inf-loading/inf-loading.component';
import { ClickOutsideDirective } from './core/click-outside.directive';
import { TestStuffComponent } from './core/test-stuff/test-stuff.component';
import { XMasTreeComponent } from './core/x-mas-tree/x-mas-tree.component';

// import { AnimatedButtonComponent } from './core/animated-button/animated-button.component';
// import { AnimatedSubmitButtonComponent } from './core/animated-submit-button/animated-submit-button.component';
// import { AnimatedDeleteButtonComponent } from './core/animated-delete-button/animated-delete-button.component';
// import { AnimatedDownloadButtonComponent } from './core/animated-download-button/animated-download-button.component';
// import { AnimatedMoreButtonComponent } from './core/animated-more-button/animated-more-button.component';
// import { AnimatedIconButtonComponent } from './core/animated-icon-button/animated-icon-button.component';

import { MenuService } from './core/navbar/menu.service';
import { AccountsService } from './accounts/accounts.service';
import { LinksService } from './links/links.service';
import { PhotosService } from './photos/photos.service';
import { VideosService } from './videos/videos.service';
import { PackageSearchService } from './package-search/package-search.service';
import { MessageService } from './messages/message.service';
import { UtilsService } from './core/utils.service';
import { LoadingService } from './core/loading.service';
import { DownloaderService } from './core/downloader/downloader.service';
import { ConfigService } from './config/config.service';
import { StatesService } from './accounts/states.service';
import { AnimatedAquaButtonComponent } from './core/animated-aqua-button/animated-aqua-button.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    NavigationComponent,
    FooterComponent,
    DashboardComponent,
    ConfigComponent,
    MessagesComponent,
    InfLoadingComponent,
    ClickOutsideDirective,
    TestStuffComponent,
    XMasTreeComponent,
    AnimatedAquaButtonComponent,

    // AnimatedButtonComponent,
    // AnimatedSubmitButtonComponent,
    // AnimatedDeleteButtonComponent,
    // AnimatedDownloadButtonComponent,
    // AnimatedMoreButtonComponent,
    // AnimatedIconButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
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
    DashboardComponent,
    HeaderComponent,
    NavbarComponent,
    NavigationComponent,
    FooterComponent
  ],
  providers: [
    MenuService,
    AccountsService,
    LinksService,
    PhotosService,
    VideosService,
    PackageSearchService,
    MessageService,
    UtilsService, 
    LoadingService, 
    DownloaderService,
    ConfigService,
    StatesService,
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
