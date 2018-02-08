import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatFormFieldModule } from '@angular/material';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from "@angular/material";

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
      HttpClientModule,
      BrowserModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatFormFieldModule,
      FormsModule,
      MatSlideToggleModule,
      MatInputModule,
      MatCardModule,
      MatGridListModule,
      MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
