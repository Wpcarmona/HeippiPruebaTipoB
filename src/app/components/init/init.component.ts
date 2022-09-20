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
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css'],
})
export class InitComponent implements OnInit {
  ValidationFormUSer!: FormGroup;
  username: string = 'user@mail.com';
  password: string = '12345';
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
    this.router.navigate(['login']);
  }

  createAccount() {
    var resp = this.auth.createAccount(
      this.ValidationFormUSer.value.email,
      this.ValidationFormUSer.value.password
    );
    if (resp == true) {
      this.router.navigate(['login']);
    } else {
      //this.elemento = document.getElementById('error')!.style.visibility ='visible';
    }
  }

  bajar() {
    this.elemento = document.getElementById('up')!.style.transition =
      'height 2s';
    this.elemento = document.getElementById('up')!.style.height = '0px';
    this.elemento = document.getElementById('btn')!.style.transition =
      'opacity 2s';
    this.elemento = document.getElementById('btn')!.style.opacity = '1';
    this.elemento = document.getElementById('form')!.style.transition =
      'opacity 2s';
    this.elemento = document.getElementById('form')!.style.opacity = '0';
    this.elemento = document.getElementById('form')!.style.transition =
      'all 1.5s linear';
    this.elemento = document.getElementById('form')!.style.transform =
      'translateY(100px)';
    this.elemento = document.getElementById('btn-x')!.style.transition =
      'opacity 2s';
    this.elemento = document.getElementById('btn-x')!.style.opacity = '0';
  }

  subir() {
    this.elemento = document.getElementById('up')!.style.transition =
      'height 2s';
    this.elemento = document.getElementById('up')!.style.height = '50%';
    this.elemento = document.getElementById('btn')!.style.transition =
      'opacity 2s';
    this.elemento = document.getElementById('btn')!.style.opacity = '0';
    this.elemento = document.getElementById('form')!.style.transition =
      'opacity 2s';
    this.elemento = document.getElementById('form')!.style.opacity = '1';
    this.elemento = document.getElementById('form')!.style.transition =
      'all 1.5s linear';
    this.elemento = document.getElementById('form')!.style.transform =
      'translateY(-250px)';
    this.elemento = document.getElementById('btn-x')!.style.transition =
      'opacity 2s';
    this.elemento = document.getElementById('btn-x')!.style.opacity = '1';
  }
}
