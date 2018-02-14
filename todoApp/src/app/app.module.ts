import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { routing } from './app.routing'
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AppComponent } from './app.component';
import { SidenavResponsive } from "./components/sidenav-responsive/sidenav-responsive";
import { LoginComponent } from './components/login/login.component';
import { PageNotFound } from "./not-found.component";
import {DetailsComponent} from "./components/dashboard/todo-details/details.component";
import { LoginService } from "./services/login.service";
import { AuthGuardService } from "./services/auth-guard.service";
import { GroupService } from "./services/group.service";
import { TodoService } from "./services/todo.service";

import { httpInterceptorProviders} from "./components/interceptors/index";
import { APP_CONFIG, END_POINT_CONFIG } from "./services/app.config";
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
    AppComponent, DashboardComponent, LoginComponent,
    SidenavResponsive, DetailsComponent, PageNotFound
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      MaterialModule,
      MatNativeDateModule,
      routing
  ],
  providers: [
      LoginService,
      AuthGuardService,
      GroupService,
      TodoService,
      httpInterceptorProviders,
      { provide: APP_CONFIG, useValue: END_POINT_CONFIG }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }