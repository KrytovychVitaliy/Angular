import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/shared/services/payment/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})

export class PaymentComponent implements OnInit {
  searchName = "";
  users: Array<any> = [];

  constructor(
    private _paymentService: PaymentService
  ) {}

  ngOnInit(): void {
    this.loadUsers()
  }

  loadUsers(): void{
this.users = this._paymentService.users
  }

}
