import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {APP_ROUTING} from "./app.routing";
import {RouterModule} from "@angular/router";
import {MaterialModule} from "@angular/material";
import {SalesModule} from "./sales/sales.module";
import { NavButtonsComponent } from './shared/nav-buttons/nav-buttons.component';
import {NavButtonsModule} from "./shared/nav-buttons/nav-buttons.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    SalesModule,
    RouterModule.forRoot(APP_ROUTING)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
