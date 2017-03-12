import {Component} from '@angular/core';

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

    {label: 'Target Premium', link: ['/sales', 'auto', 'target-premium']},
    {label: 'Personal Info', link: ['/sales', 'auto', 'personal-info', 'name']},
    {label: 'Vehicles', link: ['/sales', 'auto', 'vehicles']},
    {label: 'Get Your Quote', link: ['/sales', 'auto', 'quote-summary']}

  ];



}
