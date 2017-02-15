import { Routes } from '@angular/router';

import { SalesComponent } from './sales/sales.component';
import { Salesroutes } from './sales/sales.route';

export const routes: Routes = [
  ...Salesroutes,
  { path: '**', component: SalesComponent }
];
