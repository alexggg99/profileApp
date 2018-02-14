import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { AuthGuardService } from "./services/auth-guard.service";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { DetailsComponent } from "./components/dashboard/todo-details/details.component";
import { PageNotFound } from "./not-found.component";

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
    {   path: 'todo/:id',
        component: DetailsComponent,
        canActivate: [AuthGuardService]
    },
    {   path: 'todo/new',
        component: DetailsComponent,
        canActivate: [AuthGuardService]
    },
    {   path: 'group/:id',
        component: DashboardComponent,
        canActivate: [AuthGuardService]
    },
  { path: '', redirectTo: 'group/1', pathMatch: 'full' },
  { path: '**', component: PageNotFound }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
