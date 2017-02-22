import { Auto } from '../auto'
import { AutoDataService } from '../autoDataService'
import { Personalinfo } from './personInfo'
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http'

@Component({
  selector: 'app-personal-info',
  templateUrl: 'personal-info.component.html',
  styleUrls: ['personal-info.component.css']
})
export class PersonalInfoComponent {

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


  clicked() {
    console.log(this.auto.personalinfo);
    console.log(this.personalinfo);
    this.auto.personalinfo = this.personalinfo;
    this.autosalesdataService.sendData(this.auto.personalinfo)
      .subscribe();
  }
  personalInfoTabData = [

    { label: "Name", link: ['name'] },
    { label: "Address", link: ['address'] },
    { label: "History", link: ['history'] }

  ];



}
