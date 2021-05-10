import { Component, OnInit } from '@angular/core';
import { ModalAddEditeService } from 'src/app/shared/services/modal-add-edite.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  arrUsers = [];

  constructor(
    public modalService: ModalAddEditeService,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(): void {
    this.usersService
      .getUsers()
      .then(response => {
        this.arrUsers = response;
      });
  }

  deleteUser(oneUser): void{
    this.modalService.modalDelete = true;
    this.modalService.deleteUser = oneUser;
  }

  blockUser(oneUser): void{
    oneUser[1].block = true;
    this.usersService
      .patchUser(oneUser)
      .then(() => {
        this.getUsers();
      });
  }

  unblockUser(oneUser): void{
    oneUser[1].block = false;
    this.usersService
      .patchUser(oneUser)
      .then(() => {
        this.getUsers();
      });
  }


}
