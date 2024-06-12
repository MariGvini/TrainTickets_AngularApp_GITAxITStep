import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TrainspageComponent } from './pages/trainspage/trainspage.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { ReturnticketComponent } from './pages/returnticket/returnticket.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // default route
    { path: 'trainspage', component: TrainspageComponent },
    { path: 'returnticket', component: ReturnticketComponent},
    { path: '**', component : PagenotfoundComponent} // wildcard route
];
