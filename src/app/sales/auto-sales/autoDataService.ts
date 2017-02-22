import { Personalinfo } from './personal-info/personInfo'
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class AutoDataService {
  constructor(private http: Http) {

  }

  sendData(personalinfo: Personalinfo) {
    const body = JSON.stringify(personalinfo);
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
