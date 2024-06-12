import { Component, Input } from '@angular/core';
// import { IStation } from '../../models/station.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GetDeparturesService } from '../../services/get-departures.service';
import { NavigationExtras, Router, RouterModule } from '@angular/router';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule,],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.scss',
  providers: [GetDeparturesService],
})

export class ReservationFormComponent {

  @Input() stations: any;   //სადგურები (ბათუმი, თბილისი, ფოთი)

  trainsData = {
    from: "",
    to: "",
    date: "",
  }

  departuredata: any;

  constructor(private getDeparturesService: GetDeparturesService, private router: Router, private reservationService: ReservationService) { }

  getDepartures(): void {
    this.getDeparturesService.getDepartures(this.trainsData.from, this.trainsData.to, this.trainsData.date).subscribe((data: any) => {     
      
      this.departuredata = data;

      this.router.navigate(['/trainspage'], { queryParams: { trainsData: JSON.stringify(this.trainsData) } });

    });
  }

  onQuantityChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const quantity = Number(input.value);
    this.reservationService.setQuantity(quantity);
  }

}