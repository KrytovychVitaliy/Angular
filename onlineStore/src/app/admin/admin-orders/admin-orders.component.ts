import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../shared/services/order.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss']
})
export class AdminOrdersComponent implements OnInit {
  arrOrders = null;

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void{
    this.orderService
      .getOrders()
      .then(response => {
        this.arrOrders = response;
      });
  }
}
