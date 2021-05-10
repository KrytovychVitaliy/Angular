import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/shared/services/authorization.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-users-page-orders',
  templateUrl: './users-page-orders.component.html',
  styleUrls: ['./users-page-orders.component.scss']
})
export class UsersPageOrdersComponent implements OnInit {
  userLocal = null; //залогінений користувач - дані з LocalStorage
  userFirebase = null; //залогінений користувач - дані з Firebase
  arrOrders = null;

  constructor(
    public usersService: UsersService,
    private authorizationService: AuthorizationService
  ) { }

  ngOnInit(): void {
    this.getDataUser();
  }

  getDataUser(): void{
    this.userLocal = this.authorizationService.userLocal;
    this.usersService.getOneUser(this.userLocal[0]) //отримання з firebase останніх даних про поточного користувача
    .then(data => {
      this.userFirebase = data;
      this.arrOrders = data.orders;
    })

  }

}
