
import { AppModule } from '../../../app.module'
import { AutoComponent } from '../auto.component';
import { Vehicle } from './vehicle';
import { VehicledataService } from './vehicledata.service';
import { VehiclesComponent } from './vehicles-list.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { VehicleinfoComponent } from './vehicleinfo/vehicleinfo.component';

@NgModule({
  imports: [RouterModule, HttpModule, CommonModule],
  declarations: [VehiclesComponent, VehicleinfoComponent],
  exports: [VehiclesComponent],
  providers: [VehicledataService, Vehicle],
})

export class VehicleModule { }