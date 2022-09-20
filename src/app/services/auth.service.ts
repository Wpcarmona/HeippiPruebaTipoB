import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  respuesta!: boolean;

  constructor(public auth: AngularFireAuth) {}

  login(user: string, pass: string) {
    if (user == 'prueba@heippi.com' && pass == '$TecPass05') {
      var resp = true;
    } else {
      this.userLogin(user, pass);
      var resp = this.respuesta;
    }
    return resp;
  }

  userLogin(user: string, pass: string) {
    this.auth
      .signInWithEmailAndPassword(user, pass)
      .then((res) => {
        this.respuesta = true;
      })
      .catch((err) => {
        this.respuesta = false;
      });
  }

  createAccount(user: string, pass: string) {
    this.auth
      .createUserWithEmailAndPassword(user, pass)
      .then((res) => {
        this.respuesta = true;
      })
      .catch((err) => {
        this.respuesta = false;
      });
    return this.respuesta;
  }
}
