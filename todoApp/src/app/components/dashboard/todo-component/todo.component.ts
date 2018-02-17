import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Todo } from "../../../model/todo";
import { TodoService } from "../../../services/todo.service";

@Component({
  selector: 'todo-row',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input('todo') todo: Todo;
  @Input('groupId') groupId: number;
  @Output() onDelete = new EventEmitter<number>()

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  delete(todoId: number) {
    this.todoService.deleteTodo(todoId).subscribe(
        res => {
          this.onDelete.emit(res);
        }
    )
  }

}
