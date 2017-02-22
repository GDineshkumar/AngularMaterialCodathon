import { Component } from '@angular/core';

@Component({
  selector: 'app-auto-sales',
  templateUrl: './auto-sales.component.html',
  styleUrls: ['./auto-sales.component.css']
})
export class AutoSalesComponent {

  /**
   *
   * List of Tabs includes the Label and RouterLink information
   *
   * @type {[{label: string; link: [string]},{label: string; link: [string]}]}
   */

  tabData = [

    {label: "Target Premium", link: ['target-premium']},
    {label: "Personal Info", link: ['personal-info']},
    {label: "Vehicles", link: ['vehicles']},
    {label: "Get Your Quote", link: ['quote-summary']}

  ];

}
