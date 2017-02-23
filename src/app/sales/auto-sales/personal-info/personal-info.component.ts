import {Component, OnInit} from '@angular/core';
import {AutoDataService} from "../autoDataService";
import {Auto} from "../auto";
import {PersonalInfo} from "./personal-info";
import {Response} from "@angular/http";
import {TargetPremium} from "../target-premium/target-premium";

@Component({
  selector: 'sales-auto-personal-info',
  templateUrl: 'personal-info.component.html',
  styleUrls: ['personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  personalInfo: PersonalInfo;
  auto: Auto;
  autosalesdataService: AutoDataService;
  targetPremium:TargetPremium;

  constructor(targetPremium:TargetPremium, personalInfo: PersonalInfo, auto: Auto, autosalesdataService: AutoDataService) {
    this.personalInfo = personalInfo;
    this.auto = auto;
    this.autosalesdataService = autosalesdataService;
    this.targetPremium = targetPremium;
  }

  ngOnInit() {
  }

  numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

  /**
   *
   * List of Tabs includes the Label and RouterLink information for Personal Info
   *
   * @type {[{label: string; link: [string]},{label: string; link: [string]}]}
   */

  personalInfoTabData = [

    {label: "Name", link: ['name']},
    {label: "Address", link: ['address']},
    {label: "History", link: ['history']}

  ];


}
