import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule, routedComponents } from './cadastro-routing.module';
import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule, NbSpinnerModule } from '@nebular/theme';

@NgModule({
  declarations: [...routedComponents],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    ThemeModule,
    NbCardModule,
    NbSpinnerModule
  ]
})
export class CadastroModule { }
