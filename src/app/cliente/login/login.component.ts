import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [ CommonModule, ReactiveFormsModule, RouterModule],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private usuarioValido = {
    correo: "practica@gmail.com",
    contrasena: "1234"
  }

  inicioForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.inicioForm = this.formBuilder.group({
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(4)]]
    })
  }

  autenticar() {
    const { correo, contrasena } = this.inicioForm.value;

    if (this.inicioForm.valid &&
      correo === this.usuarioValido.correo &&
      contrasena === this.usuarioValido.contrasena) {
      this.router.navigate(["/app"]);
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  }
}
