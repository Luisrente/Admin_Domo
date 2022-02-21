import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'


@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  constructor(private auth:AngularFireAuth) { }

  async login(email: string , password: string){
    try {
      return await this.auth.signInWithEmailAndPassword(email,password)
    } catch (error) {
      console.log("Error en login:",error);
      return null;
    }
  }
}
