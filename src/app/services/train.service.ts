import { Injectable } from '@angular/core';
import { IStation } from '../models/station.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  constructor(private http : HttpClient) { }

  getTrains() : Observable <any> {
    const url = "https://railway.stepprojects.ge/api/trains";
    // const url = `$(this.apiUrl) /stations`;
    // console.log(url);
    return this.http.get<any>(url);
  }
}
