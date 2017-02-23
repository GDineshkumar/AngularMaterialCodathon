import {Injectable} from "@angular/core";

@Injectable()
export class TargetPremium {

  premiumValue: number;
  premiumValueMin: number;
  premiumValueMax: number;
  medicalCoverageValue: number;
  medicalCoverageValueMin: number;
  medicalCoverageValueMax: number;
  propertyCoverageValue: number;
  propertyCoverageValueMin: number;
  propertyCoverageValueMax: number;
  deductibleValue: number;
  deductibleValueMin: number;
  deductibleValueMax: number;

  constructor(){

    // Set Initial Values to Zero
    this.premiumValue = 0;
    this.medicalCoverageValue = 0;
    this.propertyCoverageValue = 0;
    this.deductibleValue = 1000;

  }

}
