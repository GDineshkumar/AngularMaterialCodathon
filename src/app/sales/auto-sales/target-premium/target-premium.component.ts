import {Component, Inject, Input} from '@angular/core';
import {AutoSalesNavService} from "../auto-sales-nav.service";
import {TargetPremium} from "./target-premium";
import {PersonalInfo} from "../personal-info/personal-info";

@Component({
  selector: 'sales-auto-target-premium',
  templateUrl: 'target-premium.component.html',
  styleUrls: ['target-premium.component.css']
})
export class TargetPremiumComponent {

  targetPremium: TargetPremium;
  percentChange: number;

  constructor(@Inject(TargetPremium) targetPremium, @Inject(AutoSalesNavService) private navService) {
    this.targetPremium = targetPremium;

    // Set Min and Max Values for Ranges

    // Premium Min and Max Values
    this.targetPremium.premiumValueMin = 0;
    this.targetPremium.premiumValueMax = 1000;

    // Medical Coverage Min and Max Values
    this.targetPremium.medicalCoverageValueMin = 0;
    this.targetPremium.medicalCoverageValueMax = 100000;

    // Property Coverage Min and Max Values
    this.targetPremium.propertyCoverageValueMin = 0;
    this.targetPremium.propertyCoverageValueMax = 200000;

    // Deductible Min and Max Values
    this.targetPremium.deductibleValueMin = 0;
    this.targetPremium.deductibleValueMax = 1000;

  }

  /**
   *
   *  Process Slider Values
   *
   *  THIS IS A SIMULATION OF THE BACKEND PROCESSING
   *
   */

  onChange(event) {

    console.log("ngModel Slider Changed: " + event);

    // Update the other sliders with the updated values
    this.percentChange = this.getPercentChange(this.targetPremium.premiumValueMax, event);

    // Handle Medical Coverage Value
    this.targetPremium.medicalCoverageValue = this.toPercentage(this.targetPremium.medicalCoverageValueMax, this.percentChange);

    // Handle Property Coverage Value
    this.targetPremium.propertyCoverageValue = this.toPercentage(this.targetPremium.propertyCoverageValueMax, this.percentChange);

    // Handle Deductible Value
    this.targetPremium.deductibleValue = this.targetPremium.deductibleValueMax - this.toPercentage(this.targetPremium.deductibleValueMax, this.percentChange);

  }

  /**
   *
   * Translate to Percentage
   *
   */

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  toPercentage(max: number, value: number) {
    return Math.round(max * value);
  }

  /**
   *
   * Process Min and Max Range
   *
   */

  getPercentChange(max: number, value: number) {

    return value / max;

  }

  /**
   *
   * Nav Next Service
   *
   */

  onNextClicked() {
    this.navService.goToView(1);
  }


}
