import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PersonalInfoHistoryComponent} from "./personal-info-history/personal-info-history.component";
import {PersonalInfoAddressComponent} from "./personal-info-address/personal-info-address.component";
import {PersonalInfoNameComponent} from "./personal-info-name/personal-info-name.component";
import {RouterModule} from "@angular/router";
import {PersonalInfoComponent} from "./personal-info.component";
import {MaterialModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [
    PersonalInfoComponent,
    PersonalInfoNameComponent,
    PersonalInfoAddressComponent,
    PersonalInfoHistoryComponent
  ]
})
export class PersonalInfoModule {
}
