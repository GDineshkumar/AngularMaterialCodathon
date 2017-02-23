import { PersonalInfo } from './personal-info/personal-info'
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class AutoDataService {

  constructor(private http: Http) {
  }

  sendData(personalInfo: PersonalInfo) {
    const body = JSON.stringify(personalInfo);
    console.log("request ::" + body);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8080/save', body, {
      headers: headers
    });
  }


  getUserInfo() {
    return this.http.get('http://localhost:8080/data');
  }

}
