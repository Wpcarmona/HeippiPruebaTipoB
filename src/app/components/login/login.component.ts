import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  ValidationFormUSer!: FormGroup;
  username: string = '';
  password: string = '';
  elemento: any;

  validationMessages = {
    email: [
      { type: 'required', message: 'Ingresa un correo electronico' },
      {
        type: 'pattern',
        meesage: 'El correo electronico es incorrecto, intentalo de nuevo',
      },
    ],
    password: [
      { type: 'required', message: 'Ingresa una contraseña' },
      {
        type: 'minlength',
        message: 'La contraseña debe tener minimo 6 caracteres',
      },
    ],
  };

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.ValidationFormUSer = this.formBuilder.group({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ])
      ),

      password: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(6)])
      ),
    });
  }

  login() {
    var resp = this.auth.login(
      this.ValidationFormUSer.value.email,
      this.ValidationFormUSer.value.password
    );
    console.log('respuesta -> ' + resp);
    if (resp == true) {
      this.router.navigate(['main']);
    } else {
      //this.elemento = document.getElementById('error')!.style.visibility ='visible';
    }
  }

  backButton() {
    this.router.navigate(['init']);
  }
}
