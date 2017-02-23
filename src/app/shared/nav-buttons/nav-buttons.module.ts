import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from "@angular/material";
import {NavButtonsComponent} from "./nav-buttons.component";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [NavButtonsComponent],
  exports: [NavButtonsComponent]
})
export class NavButtonsModule {
}
