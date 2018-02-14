import 'rxjs/add/operator/map'
import {Inject, Injectable} from '@angular/core';

import {HttpClient} from "@angular/common/http";
import { Todo } from "../model/todo";
import { HttpParams } from "@angular/common/http";
import {AppConfig} from "./app-config";
import {APP_CONFIG} from "./app.config";

@Injectable()
export class TodoService {

  constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) { }

  getTodos(id:number) {
    let url = this.config.serverTodo + '/todo';
    return this.http.get<Todo[]>(url);
  }

  getTodo(id:number) {
    let url = this.config.serverTodo + '/todo/'+id;
    return this.http.get<Todo>(url);
  }

  getTodoByGroupId(id:number) {
        let url = this.config.serverTodo + '/todo';
        return this.http.get<Todo[]>(url, {params: new HttpParams().append('groupId', '' + id)});
  }

  saveTodo(todo: Todo) {
    let url = this.config.serverTodo + '/todo'
    return this.http.post<Todo>(url, todo);
  }

}
