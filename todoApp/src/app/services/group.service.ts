import 'rxjs/add/operator/map'
import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {Group} from "../model/group";
import {GlobalVariable} from "./global.variable ";

@Injectable()
export class GroupService {

  constructor(private http: HttpClient, private gv: GlobalVariable) { }

  getGroups() {
    let url = this.gv.serverTodo + '/group';
    return this.http.get<Group[]>(url).map(result => {
        result.forEach(res => {
          res.url = '/group/' + res.id;
        });
        return result;
    });
  }

  getGroup(id:number) {
    let url = this.gv.serverTodo + '/group/'+id;
    return this.http.get<Group>(url);
  }

}
