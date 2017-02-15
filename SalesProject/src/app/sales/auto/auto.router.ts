import { AutoComponent } from './auto.component';
import { PersonlInfoRoute } from './personalInfo/personalInfo.router';
import { Route } from '@angular/router';

export const AutoRoutes: Route[] = [
  {
    path: 'auto',
    component: AutoComponent,
    children: [
      ...PersonlInfoRoute],
  }
];
