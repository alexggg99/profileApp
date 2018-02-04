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
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from "@angular/material";

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginService} from "./services/login.service";
import { BookService } from "./services/book.service";
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import {AuthGuardService} from "./services/auth-guard.service";
import { BookListComponent } from './components/book-list/book-list.component';

import { httpInterceptorProviders} from "./components/interceptors/index";
import { ViewBookComponent } from './components/view-book/view-book.component';
import { GlobalVariable } from "./services/global.variable ";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    AdminHomeComponent,
    BookListComponent,
    ViewBookComponent
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
    MatCardModule,
    MatGridListModule,
    MatListModule
  ],
  providers: [LoginService, AuthGuardService, BookService, httpInterceptorProviders, GlobalVariable],
  bootstrap: [AppComponent]
})
export class AppModule { }
