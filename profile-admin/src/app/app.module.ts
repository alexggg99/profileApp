import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatFormFieldModule } from '@angular/material';
import { routing } from './app.routing'
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginService} from "./services/login.service";
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import {AuthGuardService} from "./services/auth-guard.service";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    AdminHomeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    routing,
    MatFormFieldModule,
    FormsModule,
    MatSlideToggleModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [LoginService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
