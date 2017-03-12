import {Routes} from '@angular/router';
import {QuoteSummaryComponent} from './quote-summary/quote-summary.component';
import {VehiclesComponent} from './vehicles/vehicles.component';
import {PersonalInfoComponent} from './personal-info/personal-info.component';
import {TargetPremiumComponent} from './target-premium/target-premium.component';
import {PERSON_INFO_DETAILS_ROUTES} from './personal-info/personal-info.routes';

export const AUTO_SALES_ROUTES: Routes = [

  {path: 'target-premium', component: TargetPremiumComponent},
  {path: 'personal-info', component: PersonalInfoComponent, children: PERSON_INFO_DETAILS_ROUTES},
  {path: 'vehicles', component: VehiclesComponent},
  {path: 'quote-summary', component: QuoteSummaryComponent}

];
