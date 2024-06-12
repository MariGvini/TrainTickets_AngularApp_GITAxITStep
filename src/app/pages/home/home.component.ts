import { Component } from '@angular/core';
import { ReservationFormComponent } from '../reservation-form/reservation-form.component';
import { DecorationComponent } from '../decoration/decoration.component';
import { IStation } from '../../models/station.model';
import { StationService } from '../../services/station.service';
import { HttpClientModule } from '@angular/common/http';
import { TrainService } from '../../services/train.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReservationFormComponent, DecorationComponent, HttpClientModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  trains : [] = [];
  stations : IStation[] = []; //თავიდან ცარიელი მასივი
  //შემდეგ ვიძახებთ კონსტრუქტორს, რომელშიც მოვახდენთ შექმნილი სერვისის დაინჯექთებას 
  constructor (private stationService : StationService, private trainService: TrainService) {}

  //ngOnInit-ის ინიციალიზაცია
  ngOnInit():void{
    // console.log(this.stations);
    this.getStations();
    this.getTrains();
  }

  getStations():void{
    // console.log(this.stations)
    this.stationService.getStations().subscribe(stations => this.stations = stations)
  }

  getTrains():void{
    // console.log(this.trains)
    this.trainService.getTrains().subscribe(trains => this.trains = trains)

  }
}
