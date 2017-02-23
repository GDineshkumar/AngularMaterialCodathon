import {Component, OnInit} from '@angular/core';
import {AutoDataService} from "../autoDataService";
import {Auto} from "../auto";
import {PersonalInfo} from "./personal-info";
import {Response} from "@angular/http";

@Component({
  selector: 'sales-auto-personal-info',
  templateUrl: 'personal-info.component.html',
  styleUrls: ['personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  personalInfo: PersonalInfo;
  auto: Auto;
  autosalesdataService: AutoDataService;

  constructor(personalInfo: PersonalInfo, auto: Auto, autosalesdataService: AutoDataService) {
    this.personalInfo = personalInfo;
    this.auto = auto;
    this.autosalesdataService = autosalesdataService;
  }

  ngOnInit() {
    this.autosalesdataService.getUserInfo().subscribe(
      (data: Response) => {
        console.log('data from :serice' + data.json().firstName);
        this.personalInfo.firstName = data.json().firstName;
      }
    );
  }


  // clicked() {
  //   console.log(this.auto.personalinfo);
  //   console.log(this.personalinfo);
  //   this.auto.personalinfo = this.personalinfo;
  //   this.autosalesdataService.sendData(this.auto.personalinfo)
  //     .subscribe();
  // }

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
