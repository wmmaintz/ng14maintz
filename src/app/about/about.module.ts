import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SharedModule } from '../shared.module';
import { AboutRoutingModule } from './about-routing.module';

import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { WebsiteComponent } from './website/website.component';

@NgModule({
  declarations: [
    AboutComponent,
    ContactUsComponent,
    PrivacyComponent,
    TermsComponent,
    WebsiteComponent
  ],
  imports: [
    SharedModule,
    AboutRoutingModule
  ],
  exports: [
  ]
})
export class AboutModule { }
