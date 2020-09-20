import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
   NbLayoutModule,
   NbSidebarModule,
   NbMenuModule,
   NbDatepickerModule,
   NbDialogModule,
   NbWindowModule,
   NbToastrModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { PagesModule } from './pages/pages.module';
import { ThemeModule } from './@theme/theme.module';
import { CoreModule } from './@core/core.module';
import { NbPasswordAuthStrategy, NbAuthModule } from '@nebular/auth';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbEvaIconsModule,
    // PagesModule,
    CoreModule.forRoot(),
    ThemeModule.forRoot(),

    // NbAuthModule.forRoot({
    //   strategies: [
    //     NbPasswordAuthStrategy.setup({
    //       name: 'email',
    //       baseEndpoint: 'http://localhost:3000/app-api/v1',
    //         login: {
    //           endpoint: '/auth/sign-in',
    //           method: 'post'
    //         },
    //         register: {
    //           endpoint: '/auth/sign-up',
    //           method: 'post'
    //         },
    //         logout: {
    //           endpoint: '/auth/sign-out',
    //           method: 'post'
    //         },
    //         requestPass: {
    //           endpoint: '/auth/request-pass',
    //           method: 'post'
    //         },
    //         resetPass: {
    //           endpoint: '/auth/reset-pass',
    //           method: 'post'
    //         }
    //     }),
    //   ],
    //   forms: {},
    // }),
    // NbAuthModule,
    AuthModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
