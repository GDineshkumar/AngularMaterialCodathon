import {Component, Inject} from '@angular/core';
import {AutoSalesNavService} from "../../auto-sales-nav.service";
import { AutoDataService } from '../../autoDataService'
import {PersonalInfo} from "../personal-info";

@Component({
  selector: 'sales-auto-personal-info-history',
  templateUrl: './personal-info-history.component.html',
  styleUrls: ['../personal-info.component.css']
})
export class PersonalInfoHistoryComponent {

  personalInfo: PersonalInfo;
  autoDataService: AutoDataService;

  constructor(@Inject(PersonalInfo) personalInfo,
     @Inject(AutoSalesNavService)private navService, @Inject(AutoDataService) autoDataService) {
    this.personalInfo = personalInfo;
     this.autoDataService  = autoDataService;
  }

  /**
   *
   * Nav Next Service
   *
   */

  onNextClicked() {
   
    this.navService.goToView(4)
  }

  /**
   *
   * Nav Back Service
   *
   */

  onBackClicked() {
    this.navService.goToView(2);
  }

}
