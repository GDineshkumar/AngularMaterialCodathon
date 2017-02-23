import {Component, Inject} from '@angular/core';
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

  constructor(@Inject(TargetPremium) targetPremium, @Inject(AutoSalesNavService) private navService) {
    this.targetPremium = targetPremium;
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
