import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import {
  NbAuthComponent,
  NbLoginComponent,
  NbRegisterComponent,
  NbLogoutComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  // { path: 'auth', component: NbAuthComponent,
  //   children: [
  //     { path: '', component: NbLoginComponent, },
  //     { path: 'login', component: NbLoginComponent, },
  //     { path: 'register', component: NbRegisterComponent, },
  //     { path: 'logout', component: NbLogoutComponent, },
  //     { path: 'request-password', component: NbRequestPasswordComponent, },
  //     { path: 'reset-password', component: NbResetPasswordComponent }
  //   ] },
  { path: 'auth', loadChildren: () => import('./auth/auth.module')
    .then(m => m.AuthModule) },
  { path: 'pages', canActivate: [AuthGuard], loadChildren: () => import('./pages/pages.module')
    .then(m => m.PagesModule) },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' }
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
