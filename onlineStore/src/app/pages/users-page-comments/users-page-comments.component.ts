import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/shared/services/authorization.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-users-page-comments',
  templateUrl: './users-page-comments.component.html',
  styleUrls: ['./users-page-comments.component.scss']
})
export class UsersPageCommentsComponent implements OnInit {
  userLocal = null; //залогінений user, в т.ч. адмін - з LocalStorage
  currentUser = null; //поточні дані про користувача з firebase

  constructor(
    private authorizationService: AuthorizationService,
    private usersService: UsersService
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
    this.userLocal = JSON.parse(localStorage.getItem('activeUser'));
    this.usersService.getOneUser(this.userLocal[0])
      .then(data => {
        this.currentUser = data;
      })
  }
}
