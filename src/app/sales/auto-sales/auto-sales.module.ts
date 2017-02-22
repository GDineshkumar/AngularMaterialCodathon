import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TargetPremiumComponent} from "./target-premium/target-premium.component";
import {QuoteSummaryComponent} from "./quote-summary/quote-summary.component";
import {VehiclesComponent} from "./vehicles/vehicles.component";
import {RouterModule} from "@angular/router";
import {AutoSalesComponent} from "./auto-sales.component";
import {MaterialModule} from "@angular/material";
import {PersonalInfoModule} from "./personal-info/personal-info.module";
import {AutoSalesNavService} from "./auto-sales-nav.service";
import {AutoDataService} from "./autoDataService";
import {Auto} from "./auto";

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
  providers:[Auto, AutoDataService, AutoSalesNavService]
})
export class AutoSalesModule {
}
