import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/shared/services/authorization.service';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.scss']
})
export class SignOutComponent implements OnInit {

  constructor(
    private authorizationService: AuthorizationService,
    private orderService: OrderService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  out(): void {
    if (localStorage.length > 0 && localStorage.getItem('basket')) { //якщо в кошику є товари
      localStorage.removeItem('basket'); //очистка кошика
      this.orderService.basket.next(null);
    };
    localStorage.removeItem('activeUser'); //очистка даних користувача
    this.authorizationService.loggedIn.next(null);
    this.router.navigate(['/products']); //перехід на сторінку товарів
  }

  cancel(): void {
    this.router.navigate(['/products']); //перехід на сторінку товарів
  }

}
