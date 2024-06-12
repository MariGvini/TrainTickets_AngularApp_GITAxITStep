import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  //By Chat-GPT:

  private quantitySubject = new BehaviorSubject<number>(1);
  quantity$ = this.quantitySubject.asObservable();


  setQuantity(quantity: number) {
    this.quantitySubject.next(quantity);
  }

  constructor() { }
}
