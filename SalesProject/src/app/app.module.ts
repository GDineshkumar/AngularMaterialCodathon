import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routes } from './app.routes'
import { AutosalesdataService } from './sales/auto/autosalesdata.service';
import { PersonalinfodataService } from './sales/auto/personalInfo/personalinfodata.service';
import { SalesComponent } from './sales/sales.component';
import { SalesModule } from './sales/sales.module';
import { Salesroutes } from './sales/sales.route';
import { TopnavigatonComponent } from './shared/topnavigaton/topnavigaton.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule,
    SalesModule
  ],
  providers : [PersonalinfodataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
