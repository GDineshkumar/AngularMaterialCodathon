import { PersonalInfo } from './personal-info/personal-info'
import { Injectable } from '@angular/core';
import {TargetPremium} from "./target-premium/target-premium";

@Injectable()
export class Auto {
  personalInfo: PersonalInfo;
  targetPremium: TargetPremium;
}
