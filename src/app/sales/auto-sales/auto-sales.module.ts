import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TargetPremiumComponent} from './target-premium/target-premium.component';
import {QuoteSummaryComponent} from './quote-summary/quote-summary.component';
import {VehiclesComponent} from './vehicles/vehicles.component';
import {RouterModule} from '@angular/router';
import {AutoSalesComponent} from './auto-sales.component';
import {MaterialModule} from '@angular/material';
import {AutoSalesNavService} from './auto-sales-nav.service';
import {AutoDataService} from './autoDataService';
import {Auto} from './auto';
import {PersonalInfoModule} from './personal-info/personal-info.module';
import {PersonalInfo} from './personal-info/personal-info';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {TargetPremium} from './target-premium/target-premium';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    HttpModule,
    FormsModule,
    PersonalInfoModule
  ],
  declarations: [
    AutoSalesComponent,
    TargetPremiumComponent,
    QuoteSummaryComponent,
    VehiclesComponent
  ],
  providers: [Auto, AutoDataService, AutoSalesNavService, PersonalInfo, TargetPremium]
})
export class AutoSalesModule {
}
