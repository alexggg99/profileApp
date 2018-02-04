import { Component, OnInit } from '@angular/core';
import { Book } from "../../model/book";
import { Router } from "@angular/router";
import { LoginService } from "../../services/login.service";
import { BookService } from "../../services/book.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  private responce = '';

  constructor(private bookService: BookService, private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.checkSession().subscribe();
  }

}
