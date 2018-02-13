import 'rxjs/add/operator/map'
import {Inject, Injectable} from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {Group} from "../model/group";
import {AppConfig} from "./app-config";
import {APP_CONFIG} from "./app.config";

@Injectable()
export class GroupService {

  constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) { }

  getGroups() {
    let url = this.config.serverTodo + '/group';
    return this.http.get<Group[]>(url).map(result => {
        result.forEach(res => {
          res.url = '/group/' + res.id;
        });
        return result;
    });
  }

  getGroup(id:number) {
    let url = this.config.serverTodo + '/group/'+id;
    return this.http.get<Group>(url);
  }

}
