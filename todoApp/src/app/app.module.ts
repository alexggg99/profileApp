import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { routing } from './app.routing'
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AppComponent } from './app.component';
import { SidenavResponsive } from "./components/sidenav-responsive/sidenav-responsive";
import { LoginComponent } from './components/login/login.component';
import { LoginService } from "./services/login.service";
import { AuthGuardService } from "./services/auth-guard.service";
import { GroupService } from "./services/group.service";

import { httpInterceptorProviders} from "./components/interceptors/index";
import { GlobalVariable } from "./services/global.variable ";
import { CdkTableModule } from '@angular/cdk/table';

import {
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    MatFormFieldModule
} from '@angular/material';

@NgModule({
    exports: [
        CdkTableModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatFormFieldModule
    ]
})
export class MaterialModule {}

@NgModule({
  declarations: [
    AppComponent, DashboardComponent, LoginComponent, SidenavResponsive
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      HttpClientModule,
      MaterialModule,
      MatNativeDateModule,
      routing
  ],
    providers: [LoginService, AuthGuardService, GroupService, httpInterceptorProviders, GlobalVariable],
  bootstrap: [AppComponent]
})
export class AppModule { }