import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  //Written by Chat-GPT:

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToMainPage() {
    this.router.navigate(['']);
  }
}
