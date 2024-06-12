import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GetDeparturesService {

  constructor(private http : HttpClient) { }

  getDepartures(from : string, to : string, date : string) : Observable <any> {
    const url = "https://railway.stepprojects.ge/api/getdeparture";
    let params = new HttpParams();
    params = params.append("from", from);
    params = params.append("to", to);
    params = params.append("date", date);
    // console.log(url);
    return this.http.get<any>(url, {params: params});
  }
}
