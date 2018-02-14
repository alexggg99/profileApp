import 'rxjs/add/operator/map'
import {Inject, Injectable} from '@angular/core';

import {HttpClient} from "@angular/common/http";
import { Todo } from "../model/todo";
import { HttpParams } from "@angular/common/http";
import {AppConfig} from "./app-config";
import {APP_CONFIG} from "./app.config";

@Injectable()
export class TodoService {

  private url

  constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {
      this.url = this.config.serverTodo + '/todo';
  }

  getTodos(id:number) {
    return this.http.get<Todo[]>(this.url);
  }

  getTodo(id:number) {
    let url = this.url + '/todo/'+id;
    return this.http.get<Todo>(url);
  }

  getTodoByGroupId(id:number) {
        return this.http.get<Todo[]>(this.url, {params: new HttpParams().append('groupId', '' + id)});
  }

  saveTodo(todo: Todo) {
    return this.http.post<Todo>(this.url, todo);
  }

  deleteTodo(todoId: number) {
    let url = this.url + '/'+todoId;
    return this.http.delete<number>(url);
  }

}
