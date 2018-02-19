import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { PageNotFound } from "./not-found.component";
import {WelcomeComponent} from "./components/welcom/welcome.component";

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
      path: 'welcome',
      component: WelcomeComponent
  },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', component: PageNotFound }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);
