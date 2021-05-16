import { Component, OnInit } from '@angular/core';
import { ProductsTopService } from 'src/app/shared/services/products-top.service';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 2500, noPause: true, showIndicators: true } }
  ]
})

export class CarrouselComponent implements OnInit {
  isLoad: boolean = null; //спінер завантаження img
  arrProductsTop = null;

  constructor(
    private productsTopService: ProductsTopService,
    private router: Router
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

  onLoad(): void{
    if (!this.isLoad){
      this.isLoad = true;
    }
  }

  toOneProduct(product){
    this.router.navigate([`/products/${product[1].category[1].nameEN.toLowerCase()}/${product[1].inTop}`]);
  }
}
