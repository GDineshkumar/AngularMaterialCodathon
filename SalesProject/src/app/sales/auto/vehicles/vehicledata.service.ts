import { Vehicle } from './vehicle';
import { Injectable } from '@angular/core';

@Injectable()
export class VehicledataService {

  vehicles: Vehicle[];

  getExistingVehicles() {
    this.vehicles = [new Vehicle("Nissan", "Altima", 2014, "TKASDMDS234SDF"), new Vehicle("Honda", "Acord", 2020, "SDFSD234234GHG"),]
    return this.vehicles;
  }

}
