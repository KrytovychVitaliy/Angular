import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  userLocal = null; //залогінений user, в т.ч. адмін - з LocalStorage
  currentUser = null; //поточні/свіжі дані про користувача з firebase
  loggedIn: Subject<any>  = new Subject<any>(); //чи хтось залогінений
  checkIn: Subject<any>  = new Subject<any>(); //визначення чи це реєстрація, чи це вхід користувача

  constructor(
    private router: Router
  ) { }

  userLocalStorage(user): void{
    localStorage.setItem('activeUser', JSON.stringify(user)); //запис користувача в localStorage
    this.loggedIn.next(user); //передача користувача по підписках
  }
}
