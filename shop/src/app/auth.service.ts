import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private myRoute: Router) { }
  sendToken(token: string) {
    localStorage.setItem("token", token);
  }

  getToken() {
    return localStorage.getItem("token");
  }

  isLoggednIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem("token");
    this.myRoute.navigate(["Login"]);
  }
}
