import { NgModule } from '@angular/core';
import {TodoRouting} from "./todo-routing.module";
import {DashboardComponent} from "./dashboard.component";
import {DetailsComponent} from "./todo-details/details.component";
import {GroupService} from "../../services/group.service";
import {TodoService} from "../../services/todo.service";
import {TodoComponent} from "./todo-component/todo.component";
import {MaterialModule} from "../../material.module";
import { CommonModule }   from '@angular/common';

@NgModule({
    imports: [
        TodoRouting,
        MaterialModule,
        CommonModule
    ],
    declarations: [
        DashboardComponent,
        TodoComponent,
        DetailsComponent
    ],
    providers: [
        GroupService,
        TodoService
    ]
})
export class TodoModule{};