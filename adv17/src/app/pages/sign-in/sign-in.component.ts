import { Component, OnInit } from '@angular/core';
import { IUser } from '../../interfaces/user';
import { PagesService } from '../../services/pages.service';
import { VariablesService } from '../../services/variables.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['../../../assets/modal.scss']
})
export class SignInComponent implements OnInit {
  arrUsers: Array<IUser> = [];
  email = '';
  password = '';

  constructor(
    private pageService: PagesService,
    public varService: VariablesService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(): void {
    this.arrUsers = this.pageService.getUsers();
  }
  closeSignIn(): void {
    this.email = ''; // очистка поля
    this.password = ''; // очистка поля
    this.varService.visSignIn = false; // закриття вікна SignIn
  }
  submitSignIn(): void {
    const resultInd = this.pageService.enterUsers(this.email, this.password);
    if (resultInd || resultInd === 0) { // якщо введено правильні емейл і пароль
      this.varService.nameEnterUser = this.arrUsers[resultInd].username;
      this.email = ''; // очистка поля
      this.password = ''; // очистка поля
      this.varService.visSignIn = false; // закриття вікна SignIn
    }
  }
}
