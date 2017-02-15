import { TopnavigatonComponent } from '../shared/topnavigaton';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AutoModule } from './auto/auto.module';
import { SalesComponent } from './sales.component';


@NgModule({
  imports: [RouterModule, AutoModule],
  declarations: [SalesComponent, TopnavigatonComponent],
  exports: [SalesComponent, TopnavigatonComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SalesModule {
}