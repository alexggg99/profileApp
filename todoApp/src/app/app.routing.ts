import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { PageNotFound } from "./not-found.component";

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  { path: '', redirectTo: 'group/1', pathMatch: 'full' },
  { path: '**', component: PageNotFound }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);
