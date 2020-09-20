import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as ngFormsModule } from '@angular/forms';

import { AdminRoutingModule, routedComponents } from './admin-routing.module';
import { ThemeModule } from 'src/app/@theme/theme.module';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule } from '@nebular/theme';
import { AdminComponent } from './admin.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { DatepickerComponent } from './datepicker/datepicker.component';

@NgModule({
  declarations: [...routedComponents, AdminComponent,
    ButtonsComponent,
    FormInputsComponent,
    FormLayoutsComponent,
    DatepickerComponent],
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    AdminRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    CommonModule,
    NbCardModule,
  ]
})
export class AdminModule { }
