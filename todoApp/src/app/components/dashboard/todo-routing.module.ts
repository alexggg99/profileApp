import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from "../../services/auth-guard.service"
import { DashboardComponent } from "./dashboard.component";
import { DetailsComponent } from "./todo-details/details.component";

const todoRoutes: Routes = [
    {   path: 'todo/:groupId/:id',
        component: DetailsComponent,
        canActivate: [AuthGuardService]
    },
    {   path: 'group/:id',
        component: DashboardComponent,
        canActivate: [AuthGuardService]
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(todoRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class TodoRouting{};