import { NgModule } from "@angular/core";

import { SharedModule } from '../shared.module';
import { LinksRoutingModule } from './links-routing.module';
import { LinksService } from './links.service';
import { LinkAddEditComponent } from './link-add-edit/link-add-edit.component';
import { LinksListComponent } from './links-list/links-list.component';

@NgModule({
  declarations: [
    LinksListComponent,
    LinkAddEditComponent
  ],
  imports: [
    LinksRoutingModule,
    SharedModule
  ],
  exports: [
  ],
  providers: [
    LinksService
  ]
})
export class LinksModule { }
