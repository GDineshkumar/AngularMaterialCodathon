import { Component, Input, Inject } from '@angular/core';
import { Vehicle } from './vehicle';
import { AutoSalesNavService } from '../auto-sales-nav.service';
import { TargetPremium } from '../target-premium/target-premium';

@Component({
  selector: 'sales-auto-vehicles',
  templateUrl: 'vehicles.component.html',
  styleUrls: ['vehicles.component.css']
})
export class VehiclesComponent {

  targetPremium: TargetPremium;
  selectedVehicleId: number;

  @Input() vehicles: Vehicle[] = [
    new Vehicle('Volkswagen', 'GTI', '1995', 'VWW64634HKJHK987', 30),
    new Vehicle('Honda', 'Civic', '2001', 'HDW64634HKJHK987', 20),
    new Vehicle('Ford', 'Tundra', '2010', 'FDW64634HKJHK987', 25),
    new Vehicle('Toyota', 'Highlander', '2004', 'TYW64634HKJHK987', 19)

  ];

  constructor( @Inject(TargetPremium) targetPremium, @Inject(AutoSalesNavService) private navService) {
    this.targetPremium = targetPremium;
  }

  /**
   *
   * Style with commas
   *
   * @param x
   * @returns {string|any|void}
   */

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  /**
   *
   * Create Mock Vehicle Data
   *
   */

  /**
   *
   *
   * Register Event Listener For Vehicle List Item Clicks
   *
   *
   */

  onSelectedVehicle(vehicle, i: number) {
     console.log("onclicked event");
    this.selectedVehicleId = i;
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

  onClick(i: number) {
    console.log("class changer");
    return this.selectedVehicleId === i ? true : false;
  }
  
  
  deleteVehicle(i: number){
    console.log("delete");
    delete this.vehicles[i];
  }
}
