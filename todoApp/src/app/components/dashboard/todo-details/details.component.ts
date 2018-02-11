import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { AuthGuardService } from "../../../services/auth-guard.service";
import { Todo } from "../../../model/todo";
import { GroupService } from "../../../services/group.service";
import {Group} from "../../../model/group";

@Component({
  selector: 'todo-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() todo: Todo;

  selectedGroup: number;
  groups: Group[] = [];

  constructor(private groupService: GroupService,
              private router: Router,
              private activeRouter: ActivatedRoute,
              private auth: AuthGuardService) { }

  ngOnInit() {
    this.groupService.getGroups().subscribe(
        res => {
          res.forEach(group => this.groups.push(group));
        }
    )
  }

  cancel() {
    let groupId = 1;
    this.activeRouter.params.forEach((params:Params) => {
        if (params['groupId'] != undefined) {
            groupId = Number.parseInt(params['groupId']);
        }
    });
    this.router.navigate(['group/' + groupId] )
  }

}
