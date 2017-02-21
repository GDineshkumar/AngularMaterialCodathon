import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AutoSalesModule} from "./auto-sales/auto-sales.module";
import {SalesComponent} from "./sales.component";
import {RouterModule} from "@angular/router";
import {MaterialModule} from "@angular/material";
import {HomeSalesComponent} from "./home-sales/home-sales.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AutoSalesModule,
    MaterialModule
  ],
  declarations: [
    SalesComponent,
    HomeSalesComponent
  ]
})
export class SalesModule {
}
