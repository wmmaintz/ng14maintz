import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "@app/home/home/home.component";
import { DashboardComponent } from '@app/home/dashboard/dashboard.component';
import { CarouselComponent } from '@app/core/carousel/carousel.component';
import { CalendarComponent } from '@app/core/calendar/calendar.component';
import { CalendarThreeMonComponent } from '@app/core/calendar-three-mon/calendar-three-mon.component';
import { DownloaderComponent } from '@app/core/downloader/downloader.component';
import { LoadingComponent } from '@app/core/loading/loading.component';
import { NotFoundComponent } from '@app/core/not-found/not-found.component';
import { SidebarComponent } from '@app/core/sidebar/sidebar.component';
import { UnderConstructionComponent } from '@app/core/under-construction/under-construction.component';

const aboutModule = () => import('./about/about.module').then(x => x.AboutModule);
const accountModule = () => import('./accounts/accounts.module').then(x => x.AccountsModule);
const linksModule  = () => import('./links/links.module').then(x => x.LinksModule);
const photosModule = () => import('./photos/photos.module').then(x => x.PhotosModule);
const videosModule = () => import('./videos/videos.module').then(x => x.VideosModule);
const gamesModule = () => import('./games/games.module').then(x => x.GamesModule);

const routes: Routes = [
  { path: "", component:HomeComponent},
  { path: "dashboard", component:DashboardComponent},
  { path: "about", loadChildren: aboutModule },
  { path: 'photos', loadChildren: photosModule },
  { path: 'videos', loadChildren: videosModule },
  { path: 'links', loadChildren: videosModule },
  { path: 'games', loadChildren: gamesModule },
  { path: 'carousel', component:CarouselComponent },
  { path: "calendar", component:CalendarComponent},
  { path: "calendar3", component:CalendarThreeMonComponent},
  { path: "downloader", component:DownloaderComponent},
  { path: "loading", component:LoadingComponent},
  { path: "notfound", component:NotFoundComponent},
  { path: "sidebar", component:SidebarComponent},
  { path: "underconstruction", component:UnderConstructionComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
