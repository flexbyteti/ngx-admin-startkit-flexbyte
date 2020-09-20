import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthRoutingModule } from './auth-routing.module';
import { NbAuthModule, NbPasswordAuthStrategy, NbAuthJWTToken } from '@nebular/auth';
import {
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule
} from '@nebular/theme';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { RequestPasswordComponent } from './request-password/request-password.component';
import { RequestPasswordSuccessComponent } from './request-password-success/request-password-success.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const formSettings: any = {
  redirectDelay: 0,
  strategy: 'email',
  showMessages: {
    success: true,
    error: true,
  }
};

@NgModule({
  declarations: [
    LoginComponent,
    RequestPasswordComponent,
    RequestPasswordSuccessComponent,
    ResetPasswordComponent],
  providers: [AuthGuard],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    AuthRoutingModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          token: {
            class: NbAuthJWTToken,
            key: 'accessToken',
          },
          baseEndpoint: 'http://localhost:3000',
            login: {
              endpoint: '/login',
              method: 'post',
              defaultErrors: ['Alguns dados informados estão incorretos. Tente novamente.'],
              defaultMessages: ['Você foi logado com sucesso.'],
              redirect: {
                success: '/pages/dashboard',
                failure: null
              }
            },
            logout: {
              endpoint: '',
              method: 'post'
            },
            requestPass: {
              endpoint: '/requestpassword',
              method: 'post',
              defaultMessages: ['As instruções de redefinição de senha foram enviadas para seu e-mail.'],
              defaultErrors: ['Alguma coisa deu errado. Por favor tente outra vez.'],
              redirect: {
                success: '/auth/requestpasswordsuccess',
                failure: null
              }
            },
            resetPass: {
              endpoint: '/resetpassword',
              method: 'post'
            }
        }),
      ],
      forms: {
        login: {
          strategy: 'email',
          rememberMe: false,
          showMessages: {
            success: false,
            error: true
          }
        },
        requestPassword: formSettings,
        resetPassword: formSettings,
        logout: {
          redirectDelay: 0
        }
      },
    }),
  ]
})
export class AuthModule { }
