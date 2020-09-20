import { UserService } from './mock/users.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserData } from './data/users';
import { LayoutService, AnalyticsService, SeoService } from './utils/indexs';

const DATA_SERVICES = [
  { provide: UserData, useClass: UserService }
];

export const NB_CORE_PROVIDERS = [
  AnalyticsService,
  SeoService,
  LayoutService,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [ ...NB_CORE_PROVIDERS, ],
    };
  }
}


