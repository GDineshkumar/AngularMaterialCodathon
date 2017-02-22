import { Auto } from '../auto'
import { AutoDataService } from '../autoDataService'
import { Personalinfo } from './personInfo'
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PersonalInfoHistoryComponent} from "./personal-info-history/personal-info-history.component";
import {PersonalInfoAddressComponent} from "./personal-info-address/personal-info-address.component";
import {PersonalInfoNameComponent} from "./personal-info-name/personal-info-name.component";
import {RouterModule} from "@angular/router";
import {PersonalInfoComponent} from "./personal-info.component";
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import {MaterialModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    HttpModule,
    FormsModule,
  ],
  declarations: [
    PersonalInfoComponent,
    PersonalInfoNameComponent,
    PersonalInfoAddressComponent,
    PersonalInfoHistoryComponent
  ],  
   providers:[Auto, AutoDataService, Personalinfo]
})
export class PersonalInfoModule {
}
