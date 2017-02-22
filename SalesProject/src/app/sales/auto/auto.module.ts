import { AutoComponent } from './auto.component';
import { AutosalesdataService } from './autosalesdata.service';
import { PersonalInfoComponent } from './personalInfo/personalInfo.component';
import { personalInfoModule } from './personalInfo/personalinfo.module';
import { quoteSummaryModule } from './quotesummary/quote.module';
import { QuoteSummaryRoute } from './quotesummary/quote.route';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { VehiclesComponent } from './vehicles/vehicles-list.component';
import { VehicleModule } from './vehicles/vehilce-list.module';

@NgModule({
  imports: [RouterModule, personalInfoModule, HttpModule, quoteSummaryModule, VehicleModule],
  declarations: [AutoComponent],
  exports: [AutoComponent],
  providers : [AutosalesdataService],
})

export class AutoModule { }