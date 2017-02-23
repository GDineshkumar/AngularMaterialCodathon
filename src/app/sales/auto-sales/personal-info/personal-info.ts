import { Injectable } from '@angular/core';

@Injectable()
export class PersonalInfo {

  firstName: string;
  lastName: string;
  street: string;
  state: string;
  city: string;
  zip: string;
  numAccidents: number;

}

