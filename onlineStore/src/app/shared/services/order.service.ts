import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IOrder } from '../interfaces/order.interface';
import { ConstantsService } from '../services/constants.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  basket: Subject<any>  = new Subject<any>();
  url: string;

  constructor(
    private constantsService: ConstantsService,
    private http: HttpClient
  ) {
    this.url = constantsService.firebaseOrders;
  }

  getOrders() {
    return fetch(`${this.constantsService.firebaseOrders}.json`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => Object.entries(response))
      .catch( error => {
          console.warn('getOrders', error);
          return null;
        });
  }

  addOrder(order: IOrder){
    return fetch(`${this.constantsService.firebaseOrders}.json`, {
      method: 'POST',
      body: JSON.stringify(order),
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }

  total(product) {
    return product.reduce((total, elem) => {
      return total + (elem[1].price * elem[1].count);
    }, 0);
  }
}
