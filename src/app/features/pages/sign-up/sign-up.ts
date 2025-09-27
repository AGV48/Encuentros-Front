import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css'
})
export class SignUp {
  fb = inject(FormBuilder);
  route = inject(Router);

  

  signUpForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]]
  });

  onSignUp() {
    if (this.signUpForm.valid) {
      if (this.signUpForm.value.password !== this.signUpForm.value.confirmPassword) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Las contraseñas no coinciden'
        });
        return;
      }
      let user = this.signUpForm.value;
      if (localStorage.getItem(user.email!)) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Este correo ya está registrado, intenta con otro'
        });
      } else {
        localStorage.setItem(user.email!, JSON.stringify(user));
        Swal.fire({
          icon: 'success',
          title: 'Cuenta creada',
          text: 'Tu cuenta ha sido creada exitosamente'
        });
      }
      this.route.navigate(['/']);
    }
  }
}
