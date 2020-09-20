import { RequestPasswordSuccessComponent } from './request-password-success/request-password-success.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NbAuthComponent } from '@nebular/auth';
import { LoginComponent } from './login/login.component';
import { RequestPasswordComponent } from './request-password/request-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  { path: '', component: NbAuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'request-password', component: RequestPasswordComponent },
      { path: 'requestpasswordsuccess', component: RequestPasswordSuccessComponent },
      { path: 'resetpassword', component: ResetPasswordComponent }
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
