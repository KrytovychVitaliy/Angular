import { Injectable } from '@angular/core';
import { ConstantsService } from 'src/app/shared/services/constants.service';
import { CategoriesService } from './categories.service';
import { ModalAddEditeService } from './modal-add-edite.service';
import { OrderService } from 'src/app/shared/services/order.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(
    private orderService: OrderService,
    private constantsService: ConstantsService,
    public modalService: ModalAddEditeService,
    private categoriesService: CategoriesService
  ) {}

  getProducts() {
    return fetch(`${this.constantsService.firebaseProducts}.json`, {
      method: 'GET',
    })
    .then((response) => response.json())
    .then((response) => Object.entries(response))
    .catch( error => {
        console.warn('getProducts', error);
        return null;
    });
  }

  getOneProduct(id: string) {
    return fetch(`${this.constantsService.firebaseProducts}/${id}/.json`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .catch( error => {
        console.warn('getOneProduct', error);
        return null;
      });
  }

  postProduct(product) {
    return fetch(`${this.constantsService.firebaseProducts}.json`, {
      method: 'POST',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  patchProduct(product, ind) {
    return fetch(`${this.constantsService.firebaseProducts}/${ind}/.json`, {
      method: 'PATCH',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  deleteProduct(productID) {
    return fetch(
      `${this.constantsService.firebaseProducts}/${productID}.json`,
      {
        method: 'DELETE',
        body: JSON.stringify(productID),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  //----------------------------------------------------------

  postId(product) { //запис id продукта у відповідну категорію
    return fetch(
      `${this.constantsService.firebaseCategories}/${product.category[0]}/productsID.json`,
      {
        method: 'POST',
        body: JSON.stringify([product.id]),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  deleteId(product) { //видалення id продукта із відповідної категорії
    let prodID = '';
    let arrCategories = [];
    this.categoriesService.getCategories()
      .then((response) => {
        arrCategories = response;
      })
      .then(() => {
        arrCategories.forEach((element) => {
          if (element[1].productsID) {
            const obj = element[1].productsID;
            for (const key in obj) {
              if (obj[key][0] === product[1].id) {
                prodID = key;
              }
            }
          }
        });
      })
      .then(() =>{
        fetch(`${this.constantsService.firebaseCategories}/${product[1].category[0]}/productsID/${prodID}.json`, {
          method: 'DELETE',
          body: JSON.stringify(prodID),
          headers: {
            'Content-Type': 'application/json',
          },
        });
      });
  }

  //----------------------------------------------------------

  addToBasket(product): void {
    let localProducts = [];
    if (localStorage.length > 0 && localStorage.getItem('basket')) { //якщо в кошику вже є товари
      localProducts = JSON.parse(localStorage.getItem('basket')); //отримання товарів з кошика
      if (localProducts.some(localProduct => localProduct[0] === product[0])){ //якщо додається товар, що вже є в кошику
        const index = localProducts.findIndex(localProduct => localProduct[0] === product[0]); //визначається його індекс в масиві товарів, що купуються
        localProducts[index][1].count = product[1].count; //змінюється кількість на поточну
      }
      else { //якщо додається товар, якого ще немає в кошику
        localProducts.push(product);
      }
    }
    else { //якщо в кошику ще нема ніяких товарів
      localProducts.push(product);
    }
    localStorage.setItem('basket', JSON.stringify(localProducts));
    this.orderService.basket.next(product);
  }
}
