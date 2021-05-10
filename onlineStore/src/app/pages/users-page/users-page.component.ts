import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/shared/services/authorization.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  constructor(
    private usersService: UsersService,
    private authorizationService: AuthorizationService,
  ) { }

  ngOnInit(): void {
    this.initSubscriptionUser();
    this.loadLocalStorageUser(); //якщо в LocalStorage вже є користувач
  }

  initSubscriptionUser(): void {
    this.authorizationService.loggedIn.subscribe( () => {
      this.loadLocalStorageUser();
    })
  }
  
  private loadLocalStorageUser(): void {
    if (localStorage.length > 0 && localStorage.getItem('activeUser')) {
    this.authorizationService.userLocal = JSON.parse(localStorage.getItem('activeUser'));
    this.usersService.getOneUser(this.authorizationService.userLocal[0])
      .then(data => {
        this.authorizationService.currentUser = data;
      })
    }
  }

}
