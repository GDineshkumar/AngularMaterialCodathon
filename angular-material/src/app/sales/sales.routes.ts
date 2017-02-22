import {Routes} from "@angular/router";
import {AutoSalesComponent} from "./auto-sales/auto-sales.component";
import {AUTO_SALES_ROUTES} from "./auto-sales/auto-sales.routes";
import {HomeSalesComponent} from "./home-sales/home-sales.component";

export const SALES_ROUTES: Routes = [

  {path: 'auto', component: AutoSalesComponent},
  {path: 'auto', component: AutoSalesComponent, children: AUTO_SALES_ROUTES},
  {path: 'home', component: HomeSalesComponent}

];
