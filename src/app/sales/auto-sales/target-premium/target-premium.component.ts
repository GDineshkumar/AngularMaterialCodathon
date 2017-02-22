import {Component, Input, Output} from '@angular/core';

@Component({
  selector: 'app-target-premium',
  templateUrl: 'target-premium.component.html',
  styleUrls: ['target-premium.component.css']
})
export class TargetPremiumComponent {

  sliderValue: number;

  onChanged(event) {

    this.sliderValue = event.value;
    console.log("Changed To: " + this.sliderValue);

  }

}
