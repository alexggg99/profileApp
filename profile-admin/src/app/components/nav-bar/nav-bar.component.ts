import { Component, OnInit } from '@angular/core';
import { LoginService} from "../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private isLoggedIn = false;

  constructor(private loginService: LoginService, private router: Router) { }

  toggleDisplay() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  ngOnInit() {
    this.loginService.checkSession().subscribe(
      res => {
        this.isLoggedIn = true;
      },
      error => {
        this.isLoggedIn = false;
      }
    );
  }

  logout() {
    this.loginService.logout().subscribe(
      res => {
        localStorage.removeItem("xAuthToken");
        location.reload();
        this.router.navigate([]);
      },
      error => {
        console.log(error);
      }
    );
  }

}
