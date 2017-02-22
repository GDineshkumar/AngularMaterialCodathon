import {Personalinfo} from '../personInfo'
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-personal-info-name',
  templateUrl: './personal-info-name.component.html',
  styles: []
})
export class PersonalInfoNameComponent implements OnInit {

  personalinfo: Personalinfo;

  constructor(personalinfo: Personalinfo) {
    this.personalinfo = personalinfo;
  }

  ngOnInit() {
  }

}
