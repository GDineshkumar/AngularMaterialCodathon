import { Vehicle } from './vehicle';
import { VehicledataService } from './vehicledata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.css']
})
export class VehiclesComponent implements OnInit {
  vehicles: Vehicle[];
  vehicleDataService: VehicledataService;

  constructor(vehicleDataService: VehicledataService) {
    this.vehicleDataService = vehicleDataService;

  }

  ngOnInit() {
    this.vehicles = this.vehicleDataService.getExistingVehicles();
  }

}
