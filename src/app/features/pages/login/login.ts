import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  fb = inject(FormBuilder);
  router = inject(Router);

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    rememberMe: [false]
  });

  onLogin() {
    if (this.loginForm.valid) {
      let userLogin = this.loginForm.value;
      let userStr = localStorage.getItem(userLogin.email!);
      let user = JSON.parse(userStr!);
      if (user) {
        if (user.email === userLogin.email && user.password === userLogin.password) {
          this.router.navigate(['/home']);
          localStorage.setItem('isLogged', 'true, ' + JSON.stringify(userLogin.email));
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error de autenticación',
            text: 'Correo electrónico o contraseña incorrectos.'
          });
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Usuario no encontrado',
          text: 'No se encontró ningún usuario. Por favor, regístrate primero.'
        });
        this.router.navigate(['/sign-up']);
      }
    }
  }

}
