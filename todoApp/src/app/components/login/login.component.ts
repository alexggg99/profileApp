import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import {AuthGuardService} from "../../services/auth-guard.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private credential = {'username': '', 'password': ''}
  private loggedId = false;
  private badCredentials = false;

  constructor(private loginService: LoginService,
              private router: Router,
              private auth: AuthGuardService) { }

  onSubmit() {
    this.loginService.sendCredencials(this.credential.username, this.credential.password).subscribe(
      res => {
          this.auth.setToken(res);
          this.loggedId = true;
          window.location.href = '';
      },
      error => {
        if (error.status === 401) {
          console.log(error);
          this.badCredentials = true;
        }
      }
    );

  }

  ngOnInit() {
    this.loginService.checkSession().subscribe(
      res => {
        this.loggedId = true;
    },
      error => {
        this.loggedId = false;
      }
    );
  }

}
