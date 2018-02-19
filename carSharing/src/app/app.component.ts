import { Component, OnInit } from '@angular/core';
import {LoginService} from "./services/login.service";
import {AuthGuardService} from "./services/auth-guard.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    isLogged: boolean = false;

    constructor(private loginService: LoginService, private auth: AuthGuardService,
                private router: Router) {
    }

    ngOnInit() {
        this.loginService.checkSession().subscribe(
            res => {
                this.isLogged = true;
            },
            error => {
                this.isLogged = false;
            }
        );
    }

    logout(event: Event) {
        event.preventDefault();
        this.loginService.logout().subscribe(
            res => {
                if (this.auth.removeToken()) {
                    location.reload();
                    this.router.navigate([]);
                }
            },
            error => {
                console.log(error);
            }
        );
    }
}
