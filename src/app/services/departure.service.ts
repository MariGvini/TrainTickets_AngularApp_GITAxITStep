import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartureService {

  constructor(private http : HttpClient) { }

  getDepartures1() : Observable <any> {
    const url = "https://railway.stepprojects.ge/api/departures";
    // const url = `$(this.apiUrl) /stations`;
    // console.log(url);
    return this.http.get<any>(url);
  }
}
