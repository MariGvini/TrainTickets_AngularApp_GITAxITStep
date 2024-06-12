import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReservationService } from '../../services/reservation.service';


@Component({
  selector: 'app-trainspage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trainspage.component.html',
  styleUrl: './trainspage.component.scss'
  
})

// written by Chat-GPT

export class TrainspageComponent implements OnInit {

  trainsData: any;
  departuredata: any;
  quantity: number = 0;

  constructor(private router: Router, private route: ActivatedRoute, private reservationService: ReservationService) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      trainsData: any,
      departuredata: any
    };

    if (state) {
      this.trainsData = state.trainsData;
      this.departuredata = state.departuredata;
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['trainsData']) {
        this.trainsData = JSON.parse(params['trainsData']);
      }
      if (params['departuredata']) {
        this.departuredata = params['departuredata'];
      }

      this.reservationService.quantity$.subscribe(quantity => {
        this.quantity = quantity;
      });
      
    });

    this.reservationService.quantity$.subscribe(quantity => {
      this.quantity = quantity;
    });
  }

  bookTrain(train: any): void {
    // // Implement your booking logic here
    // console.log('Booking train:', train);
    // // Example: Redirect to a booking page
    // // this.router.navigate(['/booking', train.id]);
  }
}