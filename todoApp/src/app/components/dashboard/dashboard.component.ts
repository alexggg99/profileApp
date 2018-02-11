import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import {Params, Router} from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import {AuthGuardService} from "../../services/auth-guard.service";
import {Todo} from "../../model/todo";
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private credential = {'username': '', 'password': ''}
  private loggedId = false;
  private badCredentials = false;

  private groupId: number;
  private todos: Todo[] = [];

  constructor(private loginService: LoginService,
              private router: Router,
              private auth: AuthGuardService,
              private activeRouter: ActivatedRoute,
              private todoService: TodoService) { }

  ngOnInit() {
    this.loginService.checkSession().subscribe(
      res => {
        this.loggedId = true;
      },
        error => {
          this.loggedId = false;
      }
    );
    this.activeRouter.params.forEach((params:Params) => {
      if (params['id'] != undefined) {
        this.groupId = Number.parseInt(params['id']);
      } else {
        this.groupId = 1;
      }
      this.todos = [];
      this.todoService.getTodoByGroupId(this.groupId).subscribe(res => res.forEach(todo => this.todos.push(todo)))
    })
  }

  editDetails() {
  }

  addTodo() {
    this.router.navigate(['new', { groupId: this.groupId }] )
  }

}
