import { Component, OnInit } from '@angular/core';
import { ProductsTopService } from 'src/app/shared/services/products-top.service';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 2500, noPause: true, showIndicators: true } }
  ]
})

export class CarrouselComponent implements OnInit {
  arrProductsTop = null;

  constructor(
    private productsTopService: ProductsTopService
  ) { }

  ngOnInit(): void {
    this.getProductsTop();
  }

  getProductsTop(): void {
    this.productsTopService
      .getProductsTop()
        .then(response => {
          this.arrProductsTop = response;
        });
  }

}
