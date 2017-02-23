import {Component, OnInit, Inject} from '@angular/core';
import {AutoSalesNavService} from "../../sales/auto-sales/auto-sales-nav.service";
import {PersonalInfo} from "../../sales/auto-sales/personal-info/personal-info";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  personalInfo: PersonalInfo;

  constructor(@Inject(PersonalInfo) personalInfo, @Inject(AutoSalesNavService) private navService) {
    this.personalInfo = personalInfo;
  }

  ngOnInit() {
  }

  onClicked() {
    this.navService.goToView(1);
  }

}
