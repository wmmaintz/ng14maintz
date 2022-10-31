import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from '../shared.module';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about/about.component';
import { WebsiteComponent } from './website/website.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PrivacyComponent } from '../about/privacy/privacy.component';
import { TermsComponent } from '../about/terms/terms.component';

//import { UnderConstructionComponent } from '../core/under-construction/under-construction.component';

@NgModule({
  declarations: [
    AboutComponent,
    WebsiteComponent,
    ContactUsComponent,
    PrivacyComponent,
    TermsComponent,
    //UnderConstructionComponent
  ],
  imports: [
    SharedModule,
    AboutRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AboutModule { }
