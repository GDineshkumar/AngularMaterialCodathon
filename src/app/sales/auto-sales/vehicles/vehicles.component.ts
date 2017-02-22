import {Component, Input} from '@angular/core';
import {Vehicle} from "./vehicle";

@Component({
  selector: 'app-vehicles',
  templateUrl: 'vehicles.component.html',
  styleUrls: ['vehicles.component.css']
})
export class VehiclesComponent {

  /**
   *
   * Create Mock Vehicle Data
   *
   * @type {[{make: string; model: string; year: string; vin: string; premium: number},{make: string; model: string; year: string; vin: string; premium: number},{make: string; model: string; year: string; vin: string; premium: number},{make: string; model: string; year: string; vin: string; premium: number}]}
   */
  @Input() vehicles: Vehicle[] = [

    {make: "Volkswagen", model: "GTI", year: "1995", vin: "VWW64634HKJHK987", premium: 30},
    {make: "Honda", model: "Civic", year: "2001", vin: "HDW64634HKJHK987", premium: 20},
    {make: "Ford", model: "Tundra", year: "2010", vin: "FDW64634HKJHK987", premium: 25},
    {make: "Toyota", model: "Highmander", year: "2004", vin: "TYW64634HKJHK987", premium: 19},

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


}
