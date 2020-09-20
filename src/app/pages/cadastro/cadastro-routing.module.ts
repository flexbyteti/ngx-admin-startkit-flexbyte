import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PneusComponent } from './pneus/pneus.component';
import { FiltroComponent } from './filtro/filtro.component';
import { CadastroComponent } from './cadastro.component';
import { LubrificanteComponent } from './lubrificante/lubrificante.component';

const routes: Routes = [
  { path: '', component: CadastroComponent,
    children: [
      { path: 'filtro', component: FiltroComponent},
      { path: 'pneus', component: PneusComponent },
      { path: 'lubrificante', component: LubrificanteComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }

export const routedComponents = [
  CadastroComponent,
  FiltroComponent,
  PneusComponent,
  LubrificanteComponent
];
