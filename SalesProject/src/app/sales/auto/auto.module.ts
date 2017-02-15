import { AutoComponent } from './auto.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule],
  declarations: [AutoComponent],
  exports: [AutoComponent]
})

export class AutoModule { }