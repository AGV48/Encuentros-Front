import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-account',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './account.html',
  styleUrl: './account.css'
})
export class Account {
  router = inject(Router);
  fb = inject(FormBuilder);
  name = '';
  email = '';

  profileForm = this.fb.group({
    name: [this.name],
  });

  passwordForm = this.fb.group({
    currentPassword: [''],
    newPassword: [''],
    confirmNewPassword: ['']
  });

  constructor() {
    if (!localStorage.getItem('isLogged') || localStorage.getItem('isLogged')?.split(', ')[0] !== 'true') {
      this.router.navigate(['/']);
    }

    let strUserEmail = localStorage.getItem('isLogged')!.split(', ')[1];
    let userEmail = JSON.parse(strUserEmail!);
    let strUser = localStorage.getItem(userEmail)!;
    let user = JSON.parse(strUser!);

    this.name = user.name;
    this.email = user.email;
  }

  OnLogout() {
    localStorage.setItem('isLogged', 'false');
    this.router.navigate(['/']);
  }

  OnSaveChanges() {
    localStorage.setItem(this.email, JSON.stringify({ name: this.profileForm.value.name, email: this.email, password: JSON.parse(localStorage.getItem(this.email)!).password }));
    Swal.fire({
      icon: 'success',
      title: 'Cambios guardados',
      showConfirmButton: false,
      timer: 1500
    });
    this.router.navigate(['/']);
  }

  onChangePassword() {
    if (this.passwordForm.value.newPassword !== this.passwordForm.value.confirmNewPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Las nuevas contraseñas no coinciden',
      });
      return;
    }

    if (this.passwordForm.value.currentPassword !== JSON.parse(localStorage.getItem(this.email)!).password) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'La contraseña actual es incorrecta',
      });
      return;
    }

    if (this.passwordForm.value.newPassword === this.passwordForm.value.currentPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'La nueva contraseña no puede ser igual a la actual',
      });
      return;
    }

    localStorage.setItem(this.email, JSON.stringify({ name: this.name, email: this.email, password: this.passwordForm.value.newPassword }));
    Swal.fire({
      icon: 'success',
      title: 'Contraseña actualizada',
      showConfirmButton: true,
      timer: 1500
    });
    this.passwordForm.reset();
    this.router.navigate(['/']);
  }

  onDeleteAccount() {
    localStorage.removeItem(this.email);
    localStorage.setItem('isLogged', 'false');
    Swal.fire({
      icon: 'success',
      title: 'Cuenta eliminada',
      showConfirmButton: true,
      timer: 1500
    });
    this.router.navigate(['/']);
  }
}