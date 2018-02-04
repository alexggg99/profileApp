import { Component, OnInit } from '@angular/core';
import {BookService} from "../../services/book.service";
import { Book } from "../../model/book";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {GlobalVariable} from "../../services/global.variable ";

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

  private book:Book = new Book();
  private bookId: number;
  private bookResourceUrl: string;

  constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router, private gv: GlobalVariable) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.bookId = Number.parseInt(params['id']);
    });
    this.bookService.getBook(this.bookId).subscribe(res => {
      this.book = res;
      console.log(this.book)
    },
    err => {
      console.error(err);
    });
    this.bookResourceUrl = this.gv.bookResource;
  }

}
