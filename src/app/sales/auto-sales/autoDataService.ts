import { PersonalInfo } from './personal-info/personal-info';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class AutoDataService {

  constructor(private http: Http) {
  }

  getAccidentHistory(personalInfo: PersonalInfo) {
    const body = JSON.stringify(personalInfo);
    console.log('request ::' + body);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://10.146.199.145:8080/save', body, {
      headers: headers
    });
  }


  getUserInfo() {
    return this.http.get('http://10.146.199.145:8080/data');
  }

}
