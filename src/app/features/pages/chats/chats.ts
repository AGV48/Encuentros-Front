import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-chats',
  imports: [RouterLink],
  templateUrl: './chats.html',
  styleUrl: './chats.css'
})
export class Chats {
  router = inject(Router);

  constructor() {
    if (!localStorage.getItem('isLogged') || localStorage.getItem('isLogged')?.split(', ')[0] !== 'true') {
      this.router.navigate(['/']);
    }
  }

  

}
