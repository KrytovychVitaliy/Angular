import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import {IUser} from '../interfaces/iusers';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})

export class UsersListComponent implements OnInit {
  @Output() onClick = new EventEmitter();
  @Input() arrUs: Array<IUser>;
  @Input() ind: number;

  userLogin = '';
  userPass = '';
  userEmail = '';
  arrUser: Array<IUser>;

  constructor() {}

  ngOnInit(): void {}

  deleteUser(userIndex: number): void {
    this.arrUs.splice(userIndex, 1);
  }

}
