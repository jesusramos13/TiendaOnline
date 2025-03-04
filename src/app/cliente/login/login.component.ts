// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { Router, RouterModule } from '@angular/router';


// @Component({
//   selector: 'app-login',
//   imports: [ CommonModule, ReactiveFormsModule, RouterModule],
//   standalone: true,
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.scss'
// })
// export class LoginComponent {

//   private usuarioValido = {
//     correo: "practica@gmail.com",
//     contrasena: "1234"
//   }

//   inicioForm: FormGroup;

//   constructor(private router: Router, private formBuilder: FormBuilder) {
//     this.inicioForm = this.formBuilder.group({
//       correo: ['', [Validators.required, Validators.email]],
//       contrasena: ['', [Validators.required, Validators.minLength(4)]]
//     })
//   }

//   autenticar() {
//     const { correo, contrasena } = this.inicioForm.value;

//     if (this.inicioForm.valid &&
//       correo === this.usuarioValido.correo &&
//       contrasena === this.usuarioValido.contrasena) {
//       this.router.navigate(["/app"]);
//     } else {
//       alert("Usuario o contraseña incorrectos");
//     }
//   }
// }
import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CredentialsService} from '../../services/auth/credentials.service';
import {LoginInterface} from '../../services/interfaces/auth';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
  ],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private credentialsService: CredentialsService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }


  submit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.credentialsService.login(this.loginForm.value as LoginInterface).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(["/app/control-panel"]);
      },
      error: err => {
        console.log(err)
      }
    })
  }

}
