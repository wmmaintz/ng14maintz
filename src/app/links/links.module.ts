import { NgModule } from "@angular/core";

import { SharedModule } from '../shared.module';

import { LinksRoutingModule } from './links-routing.module';
import { LinksListComponent } from './links-list/links-list.component';
import { LinkAddEditComponent } from './link-add-edit/link-add-edit.component';

@NgModule({
  declarations: [
    LinksListComponent,
    LinkAddEditComponent
  ],
  imports: [
    SharedModule,
    LinksRoutingModule
  ],
  exports: [
  ]
})
export class LinksModule { }
