import { Component, OnInit } from '@angular/core';
import { UserServicesService } from '../services/user-services.service';
import {IUser} from '../interfaces/iusers'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  providers: [UserServicesService]
})

export class UsersListComponent implements OnInit {
  userLogin = '';
  userPass = '';
  userEmail = '';
  arrUser: Array<IUser>;

  constructor(public userService: UserServicesService) {}

  ngOnInit(): void {
    this.arrUser = this.userService.getArr();
  }

  editUser(userIndex): void {
    this.userService.editIndex = userIndex;
    this.userLogin = this.arrUser[userIndex].login;
    this.userPass = this.arrUser[userIndex].password;
    this.userEmail = this.arrUser[userIndex].email;
  }

  deleteUser(userIndex): void {
    this.userService.delArr(userIndex);
    this.userService.getArr();
  }

  addUser(): void {
      this.userService.setArr(this.userLogin, this.userPass, this.userEmail);
      this.userService.getArr();
      this.emptyInput();
  }

  saveEditUser(): void {
    this.userService.edirArr(this.userLogin, this.userPass, this.userEmail);
    this.userService.getArr();
    this.emptyInput();
    this.userService.editIndex = null;
  }

  emptyInput(): void {
    this.userLogin = '';
    this.userPass = '';
    this.userEmail = '';
  }
}
