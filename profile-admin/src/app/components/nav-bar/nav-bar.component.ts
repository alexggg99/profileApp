import { Component, OnInit } from '@angular/core';
import { LoginService} from "../../services/login.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private isLoggedIn = false;

  constructor(private loginService: LoginService) { }

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
        location.reload();
      },
      error => {
        console.log(error);
      }
    );
  }

}
