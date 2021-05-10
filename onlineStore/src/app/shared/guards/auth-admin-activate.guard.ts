import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ConstantsService } from '../services/constants.service';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminActivateGuard implements CanLoad {

  constructor(
    private constantsService: ConstantsService,
    private router: Router
  ){}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAdminLogin();
  }

  isAdminLogin(): boolean{ //перевірка наявності залогіненого admin
    if (localStorage.length > 0
      &&
      localStorage.getItem('activeUser')
      &&
      (this.constantsService.adminEmail === JSON.parse(localStorage.getItem('activeUser'))[1].email)
      ) {
      return true;
    }
    else {
      this.router.navigate(['/products']);
      return false;
    }
  }
}
