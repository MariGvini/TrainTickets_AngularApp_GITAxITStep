import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VagonService {

  constructor(private http : HttpClient) { }

  getVagons() : Observable <any> {
    const url = "https://railway.stepprojects.ge/api/vagons";
    // const url = `$(this.apiUrl) /stations`;
    // console.log(url);
    return this.http.get<any>(url);
  }
}
