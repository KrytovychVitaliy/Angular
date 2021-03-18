import { Component, OnInit } from '@angular/core';
import { ISales } from 'src/app/shared/interfaces/sales.interface';
import { SalesService } from 'src/app/shared/services/sales/sales.service';

@Component({
  selector: 'app-admin-sales',
  templateUrl: './admin-sales.component.html',
  styleUrls: ['./admin-sales.component.scss']
})

export class AdminSalesComponent implements OnInit {
  adminSales: Array<ISales> = [];

  constructor(
    private salesService: SalesService
  ) { }

  ngOnInit(): void {
  }


}
