import {Injectable} from "@angular/core";

@Injectable()
export class Vehicle {

  make: string;
  model: string;
  year: string;
  vin: string;
  premium: number;

  constructor(make: string, model: string, year: string, vin: string, premium: number) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.vin = vin;
    this.premium = premium;
  }

}
