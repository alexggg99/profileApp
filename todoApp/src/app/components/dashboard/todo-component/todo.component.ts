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
  @Output() onDelete = new EventEmitter<number>();

  private isDone: boolean = false;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.isDone = this.todo.done;
  }

  done() {
    this.todoService.updateTodo(this.todo).subscribe();
    this.isDone = !this.isDone;
  }

  delete(todoId: number) {
    this.todoService.deleteTodo(todoId).subscribe(
        res => {
          this.onDelete.emit(res);
        }
    )
  }

}
