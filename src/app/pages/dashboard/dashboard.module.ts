import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { Grafico1Component } from './grafico1/grafico1.component';
import { Grafico2Component } from './grafico2/grafico2.component';
import { Grafico3Component } from './grafico3/grafico3.component';

@NgModule({
  declarations: [DashboardComponent, Grafico1Component, Grafico2Component, Grafico3Component],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
