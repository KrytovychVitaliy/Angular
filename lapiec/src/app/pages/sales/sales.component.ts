import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ISales } from 'src/app/shared/interfaces/sales.interface';
import { SalesService } from 'src/app/shared/services/sales/sales.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit, OnDestroy {
  arrNames: Array<string> = [];
  sales: Array<ISales> = [];
  salesSubscription: Subscription;

  constructor(
    private salesService :SalesService
  ) { }

  ngOnInit(): void {
    this.LoadArrNames();
    this.loadSalea();
    // console.log(this.salesService);
  }

  LoadArrNames(): void{
    this.arrNames = this.salesService.getData();
  }

  loadSalea(): void{
    this.salesSubscription = this.salesService.getSales().subscribe(
      data => {
        if (data){
          this.sales = data
        }
      },
      err =>{
        throw new Error();
      }
    )
  }

  ngOnDestroy(): void {
    this.salesSubscription.unsubscribe();
  }
}
