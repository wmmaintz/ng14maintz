import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LinkAddEditComponent }  from './link-add-edit/link-add-edit.component';
import { LinksListComponent }     from './links-list/links-list.component';

const routes: Routes = [
  { path: 'link-add-edit',  component: LinkAddEditComponent },
  { path: 'links',          component: LinksListComponent },
  { path: 'links-list',     component: LinksListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinksRoutingModule { }
