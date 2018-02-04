import { Injectable } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";
import { Token } from "../model/token";

import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import { HttpErrorResponse } from "@angular/common/http";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";
import { Router } from "@angular/router";
import {AuthGuardService} from "./auth-guard.service";

@Injectable()
export class LoginService {

  constructor(private http: HttpClient, private router: Router, private authService: AuthGuardService) { }

  sendCredencials(username: string, password: string) {
    let url = 'http://localhost:8181/session/token';
    let encodedCredentials = btoa(username+":"+password);
    let basicHeader = "Basic "+encodedCredentials;
    let headers = new HttpHeaders({
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization': basicHeader
    });
    return this.http.get<Token>(url, {headers: headers});
  }

  checkSession() {
    let url = 'http://localhost:8181/session/user';
    let headers = new HttpHeaders();
    return this.http.get(url, {headers: headers, responseType: 'text'}).pipe(catchError(this.handleError));
  }

  logout() {
    let url = 'http://localhost:8181/session/logout';
    let headers = new HttpHeaders();
    return this.http.post(url, {},{headers: headers});
  }

  private handleError(error: HttpErrorResponse) {
    let self = this;
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
      if (JSON.parse(error.error).status == 401) {
        //Unauthorized
        if (localStorage.getItem('xAuthToken')) {
          localStorage.removeItem('xAuthToken')
          location.reload();
          this.router.navigate([]);
        }
      }
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  };


}
