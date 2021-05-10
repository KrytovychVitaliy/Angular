import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/services/order.service';
import { ConstantsService } from 'src/app/shared/services/constants.service';
import { AuthorizationService } from 'src/app/shared/services/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  adminEmail: string; //для ідентифікації адміна
  localProducts = null;
  totalPrice = null;
  activeUser = null; //залогінений user, в т.ч. адмін
  check = true; //переключння між модалками 'check in' / 'sign in'

  constructor(
    private constantsService: ConstantsService,
    private authorizationService: AuthorizationService,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.identificationAdmin();
    this.initSubscriptionPrice();
    this.initSubscriptionUser();
    this.loadLocalStorageUser(); //якщо в LocalStorage вже є користувач
    this.initSubscriptionCheckIn();
    this.loadLocalStoragePrice(); //якщо в LocalStorage вже є товар у корзині
  }

  initSubscriptionPrice(): void {
    this.orderService.basket.subscribe( () => {
      this.loadLocalStoragePrice();
    })
  }

  initSubscriptionUser(): void {
    this.authorizationService.loggedIn.subscribe( () => {
      this.loadLocalStorageUser();
    })
  }

  initSubscriptionCheckIn(): void {
    this.authorizationService.checkIn.subscribe( (data) => {
      this.check = data;
    })
  }

  private loadLocalStoragePrice(): void {
    if (localStorage.length > 0 && localStorage.getItem('basket')) { //якщо в кошику є товари
      this.localProducts = JSON.parse(localStorage.getItem('basket'));
      this.totalPrice = this.orderService.total(this.localProducts);
    } else { //якщо в кошику немає товарів
      this.totalPrice = 0;
    }
  }

  private loadLocalStorageUser(): void {
    if (localStorage.length > 0 && localStorage.getItem('activeUser')) { //якщо є залогінений користувач
      this.activeUser = JSON.parse(localStorage.getItem('activeUser'));
    } else { //якщо немає залогінених користувачів
      this.activeUser = null;
    }
  }

  private identificationAdmin(): void {
    this.adminEmail = this.constantsService.adminEmail;
  }

}
