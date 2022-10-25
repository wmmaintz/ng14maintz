import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { LoginComponent } from './login/login.component';
import { LogoffComponent } from './logoff/logoff.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { RegisterComponent } from './register/register.component';
import { TermsComponent } from './terms/terms.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UsersListComponent } from './users-list/users-list.component';
import { SharedModule } from '../shared.module';


@NgModule({
  declarations: [
    LoginComponent,
    LogoffComponent,
    PrivacyComponent,
    RegisterComponent,
    TermsComponent,
    UserEditComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AccountsRoutingModule
  ]
})
export class AccountsModule { }
