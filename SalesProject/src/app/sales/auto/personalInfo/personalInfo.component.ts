import { AutosalesdataService } from '../autosalesdata.service';
import { PersonalinfodataService } from './personalinfodata.service';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http'

@Component({
  selector: 'sales-useroinfo',
  templateUrl: './personalinfo.component.html',
  styleUrls: ['./personalinfo.component.css']
})
export class PersonalInfoComponent implements OnInit {

  personalinfodataService: PersonalinfodataService;
  autosalesdataService: AutosalesdataService;

  constructor(personlaInfo: PersonalinfodataService, autosalesdataService: AutosalesdataService) {
    this.personalinfodataService = personlaInfo;
    this.autosalesdataService = autosalesdataService;
  }

  ngOnInit() {
    this.autosalesdataService.getUserInfo().subscribe(
      (data: Response) => {
        console.log('data from :serice' + data.json().firstName);
          this.personalinfodataService.firstName = data.json().firstName;
      }
    );
  }


  clicked() {
    console.log(this.autosalesdataService.personalinfodataService);
    console.log(this.personalinfodataService);
    this.autosalesdataService.personalinfodataService = this.personalinfodataService;
    this.autosalesdataService.sendData( this.autosalesdataService.personalinfodataService)
      .subscribe();
  }
}
