import {Component, Input, Inject} from '@angular/core';
import {Vehicle} from "./vehicle";
import {AutoSalesNavService} from "../auto-sales-nav.service";

@Component({
  selector: 'sales-auto-vehicles',
  templateUrl: 'vehicles.component.html',
  styleUrls: ['vehicles.component.css']
})
export class VehiclesComponent {

  constructor(@Inject(AutoSalesNavService)private navService){

  }

  /**
   *
   * Create Mock Vehicle Data
   *
   */

  @Input() vehicles: Vehicle[] = [

    new Vehicle("Volkswagen", "GTI", "1995", "VWW64634HKJHK987", 30),
    new Vehicle("Honda", "Civic", "2001", "HDW64634HKJHK987", 20),
    new Vehicle("Ford", "Tundra", "2010", "FDW64634HKJHK987", 25),
    new Vehicle("Toyota", "Highlander", "2004", "TYW64634HKJHK987", 19)

  ];

  /**
   *
   *
   * Register Event Listener For Vehicle List Item Clicks
   *
   *
   */

  onAddVehicle(vehicle) {
    console.log("Clicked: " + vehicle.vin);
  }

  /**
   *
   * Nav Next Service
   *
   */

  onNextClicked() {
    this.navService.goToView(5);
  }

  /**
   *
   * Nav Back Service
   *
   */

  onBackClicked() {
    this.navService.goToView(3);
  }

}
