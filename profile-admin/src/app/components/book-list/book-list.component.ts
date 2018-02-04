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

  private selectedBook : Book;
  private checked: boolean;
  private bookList: Book[];
  private allChecked: boolean;
  private removedBookList: Book[] = new Array();

  constructor(private bookService: BookService, private router: Router, private loginService: LoginService) { }

  onSelect(book: Book) {
    this.selectedBook = book;
    this.router.navigate(['/viewBook', this.selectedBook.id])
  }

  ngOnInit() {
    this.loginService.checkSession().subscribe();
    this.bookService.getBooks().subscribe(res => {
      console.log(res);
      this.bookList = res;
    }, err => {
      console.log(err);
    })
  }

}
