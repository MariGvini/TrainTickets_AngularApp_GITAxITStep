import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStation } from '../models/station.model';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  // private apiUrl = "https://railway.stepprojects.ge/api" ;
  // არ მუშაობს ეს კოდი და მომიწია ხელით ჩამეწერა ლინკი ქვემოთ.

  constructor(private http : HttpClient) { }

  getStations() : Observable <IStation[]> {
    const url = "https://railway.stepprojects.ge/api/stations";
    // const url = `$(this.apiUrl) /stations`;
    // console.log(url);
    return this.http.get<IStation[]>(url);
  }

  // getStations() : Observable <any[]> {
  //   const url = "https://railway.stepprojects.ge/api/stations";
  //   // const url = `$(this.apiUrl) /stations`;
  //   console.log(url);
  //   return this.http.get<any[]>(url);
  // }


}
