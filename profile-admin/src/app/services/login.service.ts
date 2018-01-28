import { Injectable } from '@angular/core';
import {RequestOptions, Response, Headers, Http } from '@angular/http';
import { HttpHeaders } from "@angular/common/http";
import { Token } from "../model/token";

import { Observable } from 'rxjs/Observable';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class LoginService {

  constructor(private http: HttpClient ) { }

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
    let headers = new HttpHeaders({
      'x-auth-token': localStorage.getItem('xAuthToken')
    });
    return this.http.get(url, {headers: headers});
  }

  logout() {
    let url = 'http://localhost:8181/session/logout';
    let headers = new HttpHeaders({
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });
    return this.http.post(url, {},{headers: headers});
  }


}
