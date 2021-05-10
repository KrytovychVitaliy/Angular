import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/shared/services/authorization.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-users-page-data',
  templateUrl: './users-page-data.component.html',
  styleUrls: ['./users-page-data.component.scss']
})
export class UsersPageDataComponent implements OnInit {
  userLocal = null; //залогінений користувач - дані з LocalStorage
  changeData = false;

  constructor(
    private usersService: UsersService,
    private authorizationService: AuthorizationService
  ) { }

  ngOnInit(): void {
    this.getDataUser();
  }

  getDataUser(): void{
    this.userLocal = this.authorizationService.userLocal;
  }

  changeDataUser(): void{
    this.usersService.changeDataUser = true;
    this.changeData = true;
  }
}
