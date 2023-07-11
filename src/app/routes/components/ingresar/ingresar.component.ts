import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthUserService } from 'src/app/services/auth-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent {

  formularioDeIngreso: FormGroup = this.formBuilder.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['', Validators.minLength(6)]
  })
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthUserService,
    private router: Router,
  ){}

  campoEsValido(campo: string) {
    return (
      this.formularioDeIngreso.controls[campo].errors &&
      this.formularioDeIngreso.controls[campo].touched
    );
  }

  ingresarUsuario() {
    let infoParaLogin = {
      email: this.formularioDeIngreso.value.email,
      password: this.formularioDeIngreso.value.password
    }
    this.authService.login(infoParaLogin.email, infoParaLogin.password).then((response) => {
      console.log('RESPUESTA', response);
      response = JSON.stringify(response);
      localStorage.setItem('user', response);
      this.router.navigate(['dashboard']);
      alert('USUARIO CORRECTO')
    }).catch((error) => {
      console.log('ERROR', error);
      alert('USUARIO INCORRECTO')
    })
  }

  registrarUsuario() {
    let infoParaLogin = {
      email: this.formularioDeIngreso.value.email,
      password: this.formularioDeIngreso.value.password
    }
    this.authService.register(infoParaLogin.email, infoParaLogin.password).then((response) => {
      console.log('RESPUESTA', response);
      response = JSON.stringify(response);
      localStorage.setItem('user', response);
      alert('USUARIO CORRECTO')
    }).catch((error) => {
      console.log('ERROR', error);
      alert('USUARIO INCORRECTO')
    })
  }

  ingresarUsuarioConGoogle() {
    this.authService.loginWithGoogle().then((response) => {
      console.log('RESPUESTA', response);
      response = JSON.stringify(response);
      localStorage.setItem('user', response);
      this.router.navigate(['dashboard']);
      alert('USUARIO CORRECTO')
    }).catch((error) => {
      console.log('ERROR', error);
      alert('USUARIO INCORRECTO')
    })
  }

}
