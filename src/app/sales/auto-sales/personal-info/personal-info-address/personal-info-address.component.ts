import { Component, Inject } from '@angular/core';
import { AutoSalesNavService } from "../../auto-sales-nav.service";
import { AutoDataService } from '../../autoDataService'
import { PersonalInfo } from "../personal-info";
import { Response } from '@angular/http'


@Component({
  selector: 'sales-auto-personal-info-address',
  templateUrl: './personal-info-address.component.html',
  styleUrls: ['../personal-info.component.css']
})
export class PersonalInfoAddressComponent {

  personalInfo: PersonalInfo;
  autoDataService: AutoDataService;

  constructor( @Inject(PersonalInfo) personalInfo, 
    @Inject(AutoSalesNavService) private navService, @Inject(AutoDataService) autoDataService) {
    this.personalInfo = personalInfo;
    this.autoDataService = autoDataService;
  }

  /**
   *
   * Nav Next Service
   *
   */

  onNextClicked() {
    this.autoDataService.getAccidentHistory(this.personalInfo).subscribe(
    (data: Response) => {
        console.log('data from :serice' + data.json());
        this.personalInfo.numAccidents = data.json();
      });
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
