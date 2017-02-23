import {Component, Inject} from '@angular/core';
import {AutoSalesNavService} from "../../auto-sales-nav.service";
import {PersonalInfo} from "../personal-info";

@Component({
  selector: 'sales-auto-personal-info-name',
  templateUrl: './personal-info-name.component.html',
  styleUrls: ['../personal-info.component.css']
})
export class PersonalInfoNameComponent {

  personalInfo: PersonalInfo;

  constructor(@Inject(PersonalInfo) personalInfo, @Inject(AutoSalesNavService) private navService) {
    this.personalInfo = personalInfo;
  }

  /**
   *
   * Nav Next Service
   *
   */

  onNextClicked() {
    this.navService.goToView(2);
  }

  /**
   *
   * Nav Back Service
   *
   */

  onBackClicked() {
    this.navService.goToView(0);
  }

}
