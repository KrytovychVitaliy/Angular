import { Injectable } from '@angular/core';
import { ConstantsService } from 'src/app/shared/services/constants.service';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  changeDataUser: boolean = false;

  constructor(
    private constantsService: ConstantsService,
  ) { }

  getUsers() {
    return fetch(`${this.constantsService.firebaseUsers}.json`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => Object.entries(response))
      .catch( error => {
          console.warn('getUsers', error);
          return null;
        });
  }

  getOneUser(id: string) {
    return fetch(`${this.constantsService.firebaseUsers}/${id}/.json`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .catch( error => {
        console.warn('getOneUser', error);
        return null;
      });
  }

  postUser(user: IUser) {
    return fetch(`${this.constantsService.firebaseUsers}.json`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  patchUser(user: [string, IUser]) {
    return fetch(`${this.constantsService.firebaseUsers}/${user[0]}/.json`, {
        method: 'PATCH',
        body: JSON.stringify(user[1]),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  }

  deleteUser(userID: string) {
  return fetch(`${this.constantsService.firebaseUsers}/${userID}.json`, {
      method: 'DELETE',
      body: JSON.stringify(userID),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

}
