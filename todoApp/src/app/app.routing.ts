import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { AuthGuardService } from "./services/auth-guard.service";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { DetailsComponent } from "./components/dashboard/todo-details/details.component";

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
    {   path: ':id',
        component: DetailsComponent,
        canActivate: [AuthGuardService]
    },
    {   path: 'new',
        component: DetailsComponent,
        canActivate: [AuthGuardService]
    },
    {   path: 'group/:id',
      component: DashboardComponent,
      canActivate: [AuthGuardService]
  },
  { path: '**', redirectTo: 'group/1' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
