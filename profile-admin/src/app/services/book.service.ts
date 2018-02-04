import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {Book} from "../model/book";
import {GlobalVariable} from "./global.variable ";

@Injectable()
export class BookService {

  constructor(private http: HttpClient, private gv: GlobalVariable) { }

  getBooks() {
    let url = this.gv.bookResource + '/books';
    return this.http.get<Book[]>(url, {responseType: 'json'});
  }

  getBook(id:number) {
    let url = this.gv.bookResource + '/books/'+id;
    return this.http.get<Book>(url);
  }

}
