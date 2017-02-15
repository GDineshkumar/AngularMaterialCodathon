import { AutoComponent } from './auto.component';
import { PersonalInfoComponent } from './personalInfo/personalInfo.component'
import { personalInfoModule } from './personalInfo/personalinfo.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule, personalInfoModule],
  declarations: [AutoComponent],
  exports: [AutoComponent]
})

export class AutoModule { }