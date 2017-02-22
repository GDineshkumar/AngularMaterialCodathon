import { AutoComponent } from './auto.component';
import { PersonlInfoRoute } from './personalInfo/personalInfo.router';
import { QuoteSummaryRoute } from './quotesummary/quote.route';
import { VehiclesRouteList } from './vehicles/vehicles-list.route';
import { Route } from '@angular/router';

export const AutoRoutes: Route[] = [
  {
    path: 'auto',
    component: AutoComponent,
    children: [
      ...PersonlInfoRoute,
      ...QuoteSummaryRoute,
      ...VehiclesRouteList],
  }
];
