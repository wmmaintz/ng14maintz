import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoffComponent } from './logoff/logoff.component';  
import { PrivacyComponent } from '../about/privacy/privacy.component';
import { TermsComponent } from '../about/terms/terms.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  { path: 'login',      component: LoginComponent },
  { path: 'logoff',     component: LogoffComponent },
  { path: 'privacy',    component: PrivacyComponent },
  { path: 'register',   component: RegisterComponent },
  { path: 'terms',      component: TermsComponent },
  { path: 'user-edit',  component: UserEditComponent },
  { path: 'users',      component: UsersListComponent },
  { path: 'users-list', component: UsersListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
