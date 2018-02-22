import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing'
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFound } from "./not-found.component";
import { WelcomeComponent } from "./components/welcom/welcome.component";
import { LoginService } from "./services/login.service";
import { AuthGuardService } from "./services/auth-guard.service";

import { httpInterceptorProviders} from "./components/interceptors/index";
import { APP_CONFIG, END_POINT_CONFIG } from "./services/app.config";
import {MaterialModule} from "./material.module";
import {SharingListComponent} from "./components/sharing-list/sharing-list.component";
import {CarService} from "./services/car.service";
import {TripService} from "./services/trip.service";
import {SharingListItemComponent} from "./components/sharing-list/sharing-list-item/sharing-list-item.component";


@NgModule({
  declarations: [
    AppComponent, LoginComponent,
     PageNotFound, WelcomeComponent,
     SharingListComponent,
      SharingListItemComponent
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      MaterialModule,
      AppRoutingModule
  ],
  providers: [
      LoginService,
      AuthGuardService,
      CarService,
      TripService,
      httpInterceptorProviders,
      { provide: APP_CONFIG, useValue: END_POINT_CONFIG }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }