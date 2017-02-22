import {Component, OnInit} from '@angular/core';
import {AutoDataService} from "../autoDataService";
import {Auto} from "../auto";
import {Personalinfo} from "./personInfo";
import {Response} from "@angular/http";

@Component({
  selector: 'app-personal-info',
  templateUrl: 'personal-info.component.html',
  styleUrls: ['personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  personalinfo: Personalinfo;
  auto: Auto;
  autosalesdataService: AutoDataService;

  constructor(personalinfo: Personalinfo, auto: Auto, autosalesdataService: AutoDataService) {
    this.personalinfo = personalinfo;
    this.auto = auto;
    this.autosalesdataService = autosalesdataService;
  }

  ngOnInit() {
    this.autosalesdataService.getUserInfo().subscribe(
      (data: Response) => {
        console.log('data from :serice' + data.json().firstName);
        this.personalinfo.firstName = data.json().firstName;
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
