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


}
