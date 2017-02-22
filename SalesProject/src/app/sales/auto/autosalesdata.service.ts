import { PersonalinfodataService } from './personalInfo/personalinfodata.service';
import { VehicledataService } from './vehicles/vehicledata.service';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class AutosalesdataService {
  personalinfodataService: PersonalinfodataService;
  vehicledataService: VehicledataService;
  constructor(private http: Http) {

  }

  sendData(personalinfodataService: PersonalinfodataService) {
    const body = JSON.stringify(personalinfodataService);
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
