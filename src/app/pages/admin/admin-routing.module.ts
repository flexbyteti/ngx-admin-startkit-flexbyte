import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { TabelaPrecoComponent } from './tabela-preco/tabela-preco.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { AdminComponent } from './admin.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { GridComponent } from './grid/grid.component';

const routes: Routes = [
  { path: '', component: AdminComponent,
    children: [
      { path: 'usuario', component: UsuarioComponent },
      { path: 'tabelapreco', component: TabelaPrecoComponent },
      { path: 'forminputs', component: FormInputsComponent },
      { path: 'datepicker', component: DatepickerComponent },
      { path: 'botoes', component: ButtonsComponent },
      { path: 'layouts', component: FormLayoutsComponent },
      { path: 'grid', component: GridComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

export const routedComponents = [
  AdminComponent,
  UsuarioComponent,
  TabelaPrecoComponent,
  FormInputsComponent,
  GridComponent
];
