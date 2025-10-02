import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-notifications',
  imports: [RouterLink],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css'
})
export class Notifications {
  router = inject(Router);

  constructor() {
    if (!localStorage.getItem('isLogged') || localStorage.getItem('isLogged')?.split(', ')[0] !== 'true') {
      this.router.navigate(['/']);
    }
  }
}
