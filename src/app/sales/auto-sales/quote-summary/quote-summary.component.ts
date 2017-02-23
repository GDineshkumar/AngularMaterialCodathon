import {Component, OnInit, Inject} from '@angular/core';
import {TargetPremium} from "../target-premium/target-premium";

@Component({
  selector: 'sales-auto-quote-summary',
  templateUrl: 'quote-summary.component.html',
  styleUrls: ['quote-summary.component.css']
})
export class QuoteSummaryComponent  {

  targetPremium: TargetPremium;
  percentChange: number;

  constructor(@Inject(TargetPremium) targetPremium) {
    this.targetPremium = targetPremium;
  }

  numberWithCommas(x) {
    x = Math.round(x);
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  toPercentage(max: number, value: number) {
    return Math.round(max * value);
  }

}
