import { AutoRoutes } from './auto/auto.router'
import { SalesComponent } from './sales.component';
import { Route } from '@angular/router';



export const Salesroutes: Route[] = [
    {
      path: 'sales',
      component: SalesComponent,
      children: [
        ...AutoRoutes
      ]
    }
];
