import 'rxjs/add/operator/map'
import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import { Todo } from "../model/todo";
import {GlobalVariable} from "./global.variable ";
import { HttpParams } from "@angular/common/http";

@Injectable()
export class TodoService {

  constructor(private http: HttpClient, private gv: GlobalVariable) { }

  getTodos(id:number) {
    let url = this.gv.serverTodo + '/todo';
    return this.http.get<Todo[]>(url);
  }

  getTodo(id:number) {
    let url = this.gv.serverTodo + '/todo/'+id;
    return this.http.get<Todo>(url);
  }

  getTodoByGroupId(id:number) {
        let url = this.gv.serverTodo + '/todo';
        return this.http.get<Todo[]>(url, {params: new HttpParams().append('groupId', '' + id)});
  }

}
