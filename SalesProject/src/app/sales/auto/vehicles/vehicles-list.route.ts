import { VehiclesComponent } from './vehicles-list.component';
import { Route } from '@angular/router';

export const VehiclesRouteList: Route[] = [
    {
      path: 'vehicles',
      component: VehiclesComponent,
      outlet : 'autoFlow'
    }
];
