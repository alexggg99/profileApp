import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { PageNotFound } from "./not-found.component";
import {WelcomeComponent} from "./components/welcom/welcome.component";
import {SharingListComponent} from "./components/sharing-list/sharing-list.component";
import {AuthGuardService} from "./services/auth-guard.service";

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
      path: 'welcome',
      component: WelcomeComponent
  },
    {
        path: 'sharing-list',
        component: SharingListComponent,
        canActivate: [AuthGuardService]
    },
  { path: '', redirectTo: 'sharing-list', pathMatch: 'full' },
  { path: '**', component: PageNotFound }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);
