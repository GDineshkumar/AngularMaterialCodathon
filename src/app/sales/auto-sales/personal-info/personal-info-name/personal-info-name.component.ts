import { Component, Inject, OnInit } from '@angular/core';
import { AutoSalesNavService } from '../../auto-sales-nav.service';
import { AutoDataService } from '../../autoDataService';
import { PersonalInfo } from '../personal-info';
import { Response } from '@angular/http';

@Component({
  selector: 'sales-auto-personal-info-name',
  templateUrl: './personal-info-name.component.html',
  styleUrls: ['../personal-info.component.css']
})
export class PersonalInfoNameComponent implements OnInit {

  personalInfo: PersonalInfo;
  autoDataService: AutoDataService;

  ngOnInit() {
    if (localStorage.getItem('personInfo')) {
      this.personalInfo = JSON.parse(localStorage.getItem('personInfo'));
    }
  }

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
    this.navService.goToView(2);
  }

  /**
   *
   * Nav Back Service
   *
   */

  onBackClicked() {

    this.autoDataService.getUserInfo().subscribe(
      (data: Response) => {
        localStorage.setItem('personInfo', JSON.stringify(data.json()));

        console.log('get from local storage' + this.personalInfo.firstName);
        this.personalInfo.firstName = data.json().firstName;
      }
    );


    this.navService.goToView(0);
  }

}
