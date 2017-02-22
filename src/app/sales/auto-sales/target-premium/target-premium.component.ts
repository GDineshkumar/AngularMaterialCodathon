import {Component} from '@angular/core';
import {AutoSalesNavService} from "../auto-sales-nav.service";

@Component({
  selector: 'app-target-premium',
  templateUrl: 'target-premium.component.html',
  styleUrls: ['target-premium.component.css']
})
export class TargetPremiumComponent {

  constructor(private navService: AutoSalesNavService) {
  }


  /**
   *
   * Nav Next Service
   *
   */

  onNextClicked() {
    this.navService.getNextView();
  }


  /**
   *
   * Handle Slider Value Changed
   *
   */

  sliderValue: number;

  onChanged(event) {
    this.sliderValue = event.value;
    console.log("Changed To: " + this.sliderValue);
  }

}
