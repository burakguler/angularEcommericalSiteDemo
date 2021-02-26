import { Injectable } from '@angular/core';
import { User } from '../login/user';

@Injectable()
export class AccountService {

  constructor() { }

  loggedIn = false;

  login(user: User): boolean {
    if (user.userName == "burak" && user.password == "12345") {
      this.loggedIn = true;
      //localStorage.setItem("isLogged", user.userName)
      console.log("account.service.component çalıştı döndürdüğü:", true)
      return true;
    }
    console.log("account.service.component çalıştı döndürdüğü: ", false)
    return false;

  } //kullanıcı sisteme giriş yapmış mı kontrol etmesi içindir

  isLogged() {
    console.log("isLogged()", this.loggedIn)
    return this.isLogged;
  }

  logOut() {
    localStorage.removeItem("isLogged");
    this.loggedIn = false;
  }
}