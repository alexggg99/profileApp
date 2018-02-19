import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import {AuthGuardService} from "../../services/auth-guard.service";

@Component({
  selector: 'app-login',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private loginService: LoginService,
              private router: Router,
              private auth: AuthGuardService) { }


  ngOnInit() {
  }

}
