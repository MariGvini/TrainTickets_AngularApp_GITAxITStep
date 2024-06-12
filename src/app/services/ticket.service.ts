import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http : HttpClient) { }

  getTickets() : Observable <any> {
    const url = "https://railway.stepprojects.ge/api/tickets";
    // const url = `$(this.apiUrl) /stations`;
    // console.log(url);
    return this.http.get<any>(url);
  }
}
