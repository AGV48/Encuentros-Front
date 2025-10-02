import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NgFor, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  router = inject(Router);
  month: string;
  days: number[] = [];

  constructor() {
    if (!localStorage.getItem('isLogged') || localStorage.getItem('isLogged')?.split(', ')[0] !== 'true') {
      this.router.navigate(['/']);
    }

    const today = new Date();
    const year = today.getFullYear();
    const monthIndex = today.getMonth(); 

    this.month = today.toLocaleString('default', { month: 'long', year: 'numeric' });
    const lastDay = new Date(year, monthIndex + 1, 0).getDate();
    this.days = Array.from({ length: lastDay }, (_, i) => i + 1);
  }
}
