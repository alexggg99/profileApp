import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { AuthGuardService } from "./services/auth-guard.service";
import {AdminHomeComponent} from "./components/admin-home/admin-home.component";
import { BookListComponent } from "./components/book-list/book-list.component";
import {ViewBookComponent} from "./components/view-book/view-book.component";

const appRoutes: Routes = [
  {
    path : '',
    component: AdminHomeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'books',
    component: BookListComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "viewBook/:id",
    component: ViewBookComponent,
    canActivate: [AuthGuardService]
  },
  { path: '**', redirectTo: '' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
