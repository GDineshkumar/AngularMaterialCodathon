import {Component} from '@angular/core';
import {AutoSalesNavService} from "../../sales/auto-sales/auto-sales-nav.service";

@Component({
  selector: 'app-nav-buttons',
  templateUrl: './nav-buttons.component.html'
})
export class NavButtonsComponent {

  constructor(private navService: AutoSalesNavService) {
  }

  /**
   *
   * Nav Next Service
   *
   */

  onNextClicked() {
    this.navService.goToNextView();
  }

  /**
   *
   * Nav Back Service
   *
   */

  onBackClicked() {
    this.navService.goToPreviousView();
  }

}
