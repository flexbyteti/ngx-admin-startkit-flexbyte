import { Component, OnInit } from '@angular/core';

import { AnalyticsService } from './@core/utils/analyticsService';
import { SeoService } from './@core/utils/seoService';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  title = 'ngx-admin-startkit-flexbyte';

  constructor(
    private analytics: AnalyticsService,
    private seoService: SeoService) {
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
  }
}
