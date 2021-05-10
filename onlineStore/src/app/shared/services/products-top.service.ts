import { Injectable } from '@angular/core';
import { ConstantsService } from './constants.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsTopService {

  constructor(
    private constantsService: ConstantsService
  ) { }

  getProductsTop() {
    return fetch(`${this.constantsService.firebaseProductsTop}.json`, {
      method: 'GET',
    })
    .then((response) => response.json())
    .then((response) => Object.entries(response))
    .catch( error => {
        console.warn('getProductsTop', error);
        return null;
    });
  }

  postProductTop(product) {
    fetch(`${this.constantsService.firebaseProductsTop}.json`, {
      method: 'POST',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  deleteProduct(productID) {
    fetch(
      `${this.constantsService.firebaseProductsTop}/${productID}.json`,
      {
        method: 'DELETE',
        body: JSON.stringify(productID),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
