import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinksRoutingModule } from './links-routing.module';
import { LinksListComponent } from './links-list/links-list.component';
import { LinkAddEditComponent } from './link-add-edit/link-add-edit.component';


@NgModule({
  declarations: [
    LinksListComponent,
    LinkAddEditComponent
  ],
  imports: [
    CommonModule,
    LinksRoutingModule
  ]
})
export class LinksModule { }
