import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from '../shared.module';

import { AccountsRoutingModule } from './accounts-routing.module';
import { LoginComponent } from './login/login.component';
import { LogoffComponent } from './logoff/logoff.component';
import { RegisterComponent } from './register/register.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  declarations: [
    LoginComponent,
    LogoffComponent,
    RegisterComponent,
    UserEditComponent,
    UsersListComponent
  ],
  imports: [
    SharedModule,
    AccountsRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AccountsModule { }
