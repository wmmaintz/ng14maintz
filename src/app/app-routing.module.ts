import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home/home/home.component";
import { DashboardComponent } from './home/dashboard/dashboard.component';

const aboutModule = () => import('./about/about.module').then(x => x.AboutModule);
const photosModule = () => import('./photos/photos.module').then(x => x.PhotosModule);
const videosModule = () => import('./videos/videos.module').then(x => x.VideosModule);
const linksModule  = () => import('./links/links.module').then(x => x.LinksModule);

const routes: Routes = [
  { path: "", component:HomeComponent},
  { path: "dashboard", component:DashboardComponent},
  { path: "about", loadChildren: aboutModule },
  { path: 'photos', loadChildren: photosModule },
  { path: 'videos', loadChildren: videosModule },
  { path: 'links', loadChildren: videosModule },

  // otherwise redirect to home
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
