import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Token} from "../model/token";

@Injectable()
export class AuthGuardService {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.isTokenInStorage()) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url and return false
    this.router.navigate(['login']);
    return false;
  }

  isTokenInStorage() {
    if (localStorage.getItem('xAuthToken')) {
      // logged in so return true
      return true;
    } else {
      return false;
    }
  }

  getToken() {
    if (this.isTokenInStorage()) {
      return localStorage.getItem('xAuthToken')
    } else {
      return null;
    }
  }

  setToken(token: Token) {
    localStorage.setItem("xAuthToken", token.token);
  }

  removeToken() {
    if (this.isTokenInStorage()) {
      localStorage.removeItem("xAuthToken");
      return true;
    } else {
      return false;
    }
  }

}
