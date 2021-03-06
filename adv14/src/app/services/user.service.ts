import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/iuser';
import { User } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  arrUsers: Array<IUser> = [
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
  editIndex: number | null = null;

  constructor() { }

  getArr (): Array<IUser>{
    return this.arrUsers;
  }

  setArr (login: string, password: string, email: string){
    this.arrUsers.push(new User (login, password, email));
  }

  delArr (index: number){
    this.arrUsers.splice(index, 1)
  }

  edirArr(login: string, password: string, email: string){
    this.arrUsers.splice(this.editIndex, 1, new User (login, password, email))
  }
}
