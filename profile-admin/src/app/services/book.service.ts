import { Injectable } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";

import {HttpClient} from "@angular/common/http";
import {AuthGuardService} from "./auth-guard.service";
import {Book} from "../model/book";

@Injectable()
export class BookService {

  constructor(private http: HttpClient, private auth: AuthGuardService) { }

  getBooks() {
    let url = 'http://localhost:9000/books';
    return this.http.get<Book>(url, {responseType: 'json'});
  }

}
