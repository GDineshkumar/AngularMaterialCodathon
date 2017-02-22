import {Routes} from "@angular/router";
import {PersonalInfoHistoryComponent} from "./personal-info-history/personal-info-history.component";
import {PersonalInfoAddressComponent} from "./personal-info-address/personal-info-address.component";
import {PersonalInfoNameComponent} from "./personal-info-name/personal-info-name.component";

export const PERSON_INFO_DETAILS_ROUTES: Routes = [

  {path: 'name', component: PersonalInfoNameComponent},
  {path: 'address', component: PersonalInfoAddressComponent},
  {path: 'history', component: PersonalInfoHistoryComponent}

]
