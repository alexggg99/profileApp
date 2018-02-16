import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { AuthGuardService } from "../../../services/auth-guard.service";
import { Todo } from "../../../model/todo";
import { GroupService } from "../../../services/group.service";
import { TodoService } from "../../../services/todo.service";
import {Group} from "../../../model/group";
import {slideInDownAnimation} from "../../../animations";

@Component({
  selector: 'todo-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
    animations: [ slideInDownAnimation ]
})
export class DetailsComponent implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display')   display = 'block';
    @HostBinding('style.position')  position = 'absolute';
    @HostBinding('style.width')  width = '100%';

  @Input() todo: Todo;

  formInvalid: boolean = false;
  groups: Group[] = [];
  model: Todo = new Todo();

  constructor(private groupService: GroupService,
              private router: Router,
              private activeRouter: ActivatedRoute,
              private todoService: TodoService,
              private auth: AuthGuardService) { }

  ngOnInit() {
    this.groupService.getGroups().subscribe(
        res => {
          res.forEach(group => this.groups.push(group));
        }
    )
  }

  onSubmit() {
      console.log(JSON.stringify(this.model))
      this.todoService.saveTodo(this.model).subscribe(
          res => {
              this.router.navigate(['group/' + this.model.group.id] )
          }, err => {
              this.formInvalid = true;
          }
      )
  }

  back() {
    let groupId = 1;
    this.activeRouter.params.forEach((params:Params) => {
        if (params['groupId'] != undefined) {
            groupId = Number.parseInt(params['groupId']);
        }
    });
    this.router.navigate(['../'])
  }

}
