import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { ActivatedRoute, Router, ParamMap} from '@angular/router';
import {AuthGuardService} from "../../services/auth-guard.service";
import {Todo} from "../../model/todo";
import {TodoService} from "../../services/todo.service";
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private groupId: number;
  private todos$: Observable<Todo[]>;

  constructor(private loginService: LoginService,
              private router: Router,
              private auth: AuthGuardService,
              private activeRouter: ActivatedRoute,
              private todoService: TodoService) { }

  ngOnInit() {
    this.loginService.checkSession().subscribe(
        res => {
          this.getTodos();
        },
        error => {
          if (localStorage.getItem('xAuthToken')) {
              localStorage.removeItem('xAuthToken')
              location.reload();
              this.router.navigate([]);
          }
        }
    );
  }

  getTodos() {
      this.todos$ = this.activeRouter.paramMap
          .switchMap((params: ParamMap) => {
              this.groupId = +params.get('id');
              return this.todoService.getTodoByGroupId(this.groupId);
          });
  }


  delete(todoId: number) {
      this.getTodos();
      console.log('Todo #' + todoId + ' deleted.') //log it
  }

}
