import {Component, Inject} from '@angular/core';
import {AutoSalesNavService} from "../../auto-sales-nav.service";
import {PersonalInfo} from "../personal-info";


@Component({
  selector: 'sales-auto-personal-info-address',
  templateUrl: './personal-info-address.component.html',
  styles: []
})
export class PersonalInfoAddressComponent {

  personalInfo: PersonalInfo;

  constructor(@Inject(PersonalInfo) personalInfo, @Inject(AutoSalesNavService)private navService) {
    this.personalInfo = personalInfo;
  }

  /**
   *
   * Nav Next Service
   *
   */

  onNextClicked() {
    this.navService.goToView(3);
  }

  /**
   *
   * Nav Back Service
   *
   */

  onBackClicked() {
    this.navService.goToView(1);
  }


}
