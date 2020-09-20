import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ThemeModule } from '../@theme/theme.module';
import { NbMenuModule } from '@nebular/theme';
import { CadastroModule } from './cadastro/cadastro.module';
import { AdminModule } from './admin/admin.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    ThemeModule,
    NbMenuModule,
    PagesRoutingModule,
    CadastroModule,
    AdminModule,
    DashboardModule,
    MiscellaneousModule
  ]
})
export class PagesModule { }


