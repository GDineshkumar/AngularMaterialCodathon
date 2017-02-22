import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class PersonalinfodataService {

  firstName: string;
  lastName: string;
  dateOfBirth: string;
  street: string;
  aptOrSuite: string;
  state: string;
  city: string;
  zipCode: number;


}

