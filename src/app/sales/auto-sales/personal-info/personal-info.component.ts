import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: 'personal-info.component.html',
  styleUrls: ['personal-info.component.css']
})
export class PersonalInfoComponent {

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
