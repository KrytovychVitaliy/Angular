import { Component } from '@angular/core';
import {IUser} from './interfaces/iusers';
import { User } from './models/users.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'adv12';

  userLogin = '';
  userPass = '';
  userEmail = '';
  editIndex: number | null = null;

  arrayUsers: Array<IUser> = [
    {
      login: 'Petro',
      password: 'Petriv',
      email: 'petro@petriv'
    },
    {
      login: 'Ivan',
      password: 'Ivaniv',
      email: 'Ivan@Ivaniv'
    }
  ];

  addUser(): void {
  if (this.userLogin && this.userPass && this.userEmail){
    this.arrayUsers.push(new User (this.userLogin, this.userPass, this.userEmail));
  }
  this.emptyInput();
}

  saveEditUser(): void {
    this.arrayUsers.splice(this.editIndex, 1, new User (this.userLogin, this.userPass, this.userEmail));
    this.emptyInput();
    this.editIndex = null;
  }

  emptyInput(): void {
    this.userLogin = '';
    this.userPass = '';
    this.userEmail = '';
  }

  getIndex(index:number): void{
    this.editIndex = index;
    this.userLogin = this.arrayUsers[index].login;
    this.userPass = this.arrayUsers[index].password;
    this.userEmail = this.arrayUsers[index].email;
  }

}
