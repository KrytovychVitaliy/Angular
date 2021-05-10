import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthNoActivateGuard implements CanActivate {

  constructor(
    private router: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.isLogin();
  }

  isLogin(): boolean{
    if (localStorage.length > 0 && localStorage.getItem('activeUser')) { //перевірка наявності залогіненого користувача
      this.router.navigate(['/signOut']);
      return false;
    }
    else {
      return true;
    }
  }

}
