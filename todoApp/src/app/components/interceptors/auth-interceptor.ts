import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { AuthGuardService } from "../../services/auth-guard.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthGuardService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authReq = req.clone();
    // Get the auth token from the service.
    if (this.auth.isTokenInStorage()) {
      const authToken = this.auth.getToken();
      // Clone the request and replace the original headers with
      // cloned headers, updated with the authorization.
      authReq = req.clone({ setHeaders: { 'x-auth-token': authToken } });
    }
    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}
