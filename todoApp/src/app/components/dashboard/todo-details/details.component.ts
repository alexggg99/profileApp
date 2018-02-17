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

  model: Todo;
  formInvalid: boolean = false;
  groupId: any;
  groups: Group[] = [];

  constructor(private groupService: GroupService,
              private router: Router,
              private activeRouter: ActivatedRoute,
              private todoService: TodoService,
              private auth: AuthGuardService) { }

  ngOnInit() {
    this.groupId = +this.activeRouter.snapshot.paramMap.get('groupId');
    this.groupService.getGroups().subscribe(
        res => {
          res.forEach(group => this.groups.push(group));
        }
    );
    let todoId = Number.parseInt(this.activeRouter.snapshot.paramMap.get('id'));
    if (todoId && todoId > 0) {
        this.todoService.getTodo(todoId).toPromise().then(res => {
            this.model = res;
        })
    } else {
        this.model = new Todo(null, null, null, false, {id: this.groupId, name: null, url: null});
    }
  }

    compareGroups(g1: Group, g2: Group): boolean {
        return g1 && g2 ? g1.id === g2.id : g1 === g2;
    }

  onSubmit() {
      // this.model.group = new Group({1, 'test'})
      this.todoService.saveTodo(this.model).subscribe(
          res => {
              this.router.navigate(['group/' + this.model.group.id] )
          }, err => {
              this.formInvalid = true;
          }
      )
  }

  back(event: Event) {
      event.preventDefault();
      this.router.navigate(['/group/' + this.groupId]);
  }

}
