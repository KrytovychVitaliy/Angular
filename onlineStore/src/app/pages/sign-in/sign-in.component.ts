import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/shared/services/users.service';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/shared/services/authorization.service';
import { IUser } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  changeDataUser: boolean = false;  //чи користувач самостійно змінює свої дані
  erorEmail = false;
  arrUsers: [string, IUser] = null;
  user: IUser = {
    name: '',
    phone: '',
    city: '',
    street: '',
    house: '',
    email: '',
    password: ''
  }

  constructor(
    private usersService: UsersService,
    private authorizationService: AuthorizationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUsers();
    this.getChangeDataUser();
  }

  getUsers(): void {
    this.usersService
      .getUsers()
      .then(response => {
        this.arrUsers = response;
      });
  }

  getChangeDataUser(): void { //чи користувач самостійно змінює свої дані
    this.changeDataUser = this.usersService.changeDataUser;
    if (this.changeDataUser){
      this.user = {
        name: this.authorizationService.userLocal[1].name,
        phone: this.authorizationService.userLocal[1].phone,
        city: this.authorizationService.userLocal[1].city,
        street: this.authorizationService.userLocal[1].street,
        house: this.authorizationService.userLocal[1].house,
        email: this.authorizationService.userLocal[1].email,
        password: this.authorizationService.userLocal[1].password
      }
    }
  }

  addUser(form: NgForm): void {
    if(form.form.valid){
      const arrActiveUser = this.arrUsers.filter(element => element[1].email === this.user.email);
      if (arrActiveUser.length > 0){ //перевірка, чи користувач зареєстрований
        this.erorEmail = true;
        return;
      }
      this.usersService.postUser(this.user) //запис користувача
      .then(() => {
        this.router.navigate(['/checkIn']);
      })
    }
  }

  editUser(form: NgForm): void {
    if(form.form.valid){
      this.usersService.patchUser( [this.authorizationService.userLocal[0], this.user] ) //зміна даних користувача
      .then(() => {
        this.usersService.changeDataUser = false;
        this.authorizationService.userLocalStorage([this.authorizationService.userLocal[0], this.user]);
        location.reload();
      })
    }
  }

  toCheckIn(form: NgForm): void{
    this.authorizationService.checkIn.next(true);
    this.router.navigate(['/checkIn']);
  }
}
