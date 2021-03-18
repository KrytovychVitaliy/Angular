import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISales } from 'src/app/shared/interfaces/sales.interface';
import { SalesService } from 'src/app/shared/services/sales/sales.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  sale: ISales;

  constructor(
    private route: ActivatedRoute,
    private saleService: SalesService,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  getCurrentSale(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.saleService.getOneSales(id).subscribe(
      data => {
        this.sale = data;
        console.log(data);
      }
    );
  }
}
