import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/shared/services/authorization.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss']
})
export class CheckInComponent implements OnInit {
  form = null;
  arrUsers = [];
  userEmail = '';
  userPassword = '';
  passwordError = false;
  emailError = false;

  constructor(
    public usersService: UsersService,
    private authorizationService: AuthorizationService,
    private router: Router
  ) {}

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

  checkUser(form: NgForm): void {
    this.form = form;
    if(form.form.valid){
        this.arrUsers.forEach((element)=>{ //перевірка, чи користувач зареєстрований
          if (element[1].email === this.userEmail){ //якщо користувач зареєстрований
              if (element[1].password === this.userPassword){ //якщо користувач зареєстрований і ввів правильний пароль
                this.authorizationService.userLocalStorage(element);
                this.router.navigate(['/products']); //перехід на сторінку товарів
              } else { //якщо користувач зареєстрований, але ввів неправильний пароль
                this.passwordError = true;
                this.emailError = false;
              }
          } else { //якщо користувач не зареєстрований або ввів не правильний емейл
            this.passwordError = false;
            this.emailError = true;
          }
        })
    }
  }

  signIn(): void {
    if(this.form){
      this.form.resetForm();
    }
    this.form = null;
    this.passwordError = false;
    this.emailError = false;
    this.authorizationService.checkIn.next(false);
    this.router.navigate(['/signIn']);
  }
}
