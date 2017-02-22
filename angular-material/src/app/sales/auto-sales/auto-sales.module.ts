import { Auto } from './auto'
import {NgModule, Provider} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TargetPremiumComponent} from "./target-premium/target-premium.component";
import {PersonalInfoComponent} from "./personal-info/personal-info.component";
import {QuoteSummaryComponent} from "./quote-summary/quote-summary.component";
import {VehiclesComponent} from "./vehicles/vehicles.component";
import {RouterModule} from "@angular/router";
import {AutoSalesComponent} from "./auto-sales.component";
import { AutoDataService } from './autoDataService'
import {MaterialModule} from "@angular/material";
import {PersonalInfoModule} from "./personal-info/personal-info.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    PersonalInfoModule
  ],
  declarations: [
    AutoSalesComponent,
    TargetPremiumComponent,
    QuoteSummaryComponent,
    VehiclesComponent
  ],
  providers:[Auto, AutoDataService]
})
export class AutoSalesModule {
}