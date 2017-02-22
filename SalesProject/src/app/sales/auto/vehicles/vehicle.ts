import { Injectable } from '@angular/core';

@Injectable()
export class Vehicle {

  private make: string;
  private model: string;
  private year: number;
  private vin: string;

  constructor(make: string, model: string, year: number, vin: string) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.vin = vin;
  }


}
