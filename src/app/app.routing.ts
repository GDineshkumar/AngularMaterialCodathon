import {Routes} from "@angular/router";
import {SalesComponent} from "./sales/sales.component";
import {SALES_ROUTES} from "./sales/sales.routes";
import {AUTO_SALES_ROUTES} from "./sales/auto-sales/auto-sales.routes";
import {AutoSalesComponent} from "./sales/auto-sales/auto-sales.component";
import {LandingComponent} from "./shared/landing/landing.component";

export const APP_ROUTING: Routes = [

  {path: '', component: LandingComponent},
  {path: '', component: LandingComponent, children: AUTO_SALES_ROUTES},
  {path: 'sales', component: SalesComponent},
  {path: 'sales', component: SalesComponent, children: SALES_ROUTES}

];
